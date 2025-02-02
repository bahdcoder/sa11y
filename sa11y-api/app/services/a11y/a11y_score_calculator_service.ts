import A11YCheck from '#models/a11y_check'
import db from '@adonisjs/lucid/services/db'

export class A11yScoreCalculatorService {
  async run(a11yCheck: A11YCheck) {
    const result: { rows: [{ notice_count: string; warning_count: string; error_count: string }] } =
      await db.rawQuery(
        /* sql */ `select count(*) filter (where type = 'notice') as notice_count, count(*) filter (where type = 'warning') as warning_count, count(*) filter (where type = 'error') as error_count from a11y_results where a11y_check_id = :a11yCheckId`,
        {
          a11yCheckId: a11yCheck.id,
        }
      )

    const {
      error_count: errorCount,
      notice_count: noticeCount,
      warning_count: warningCount,
    } = result.rows[0]

    return this.calculateScore(
      Number.parseInt(errorCount),
      Number.parseInt(warningCount),
      Number.parseInt(noticeCount)
    )
  }

  /**
   * Calculates an accessibility score based on the severity of issues found
   *
   * @param critical - Number of critical/error-level accessibility issues
   * @param severe - Number of severe/warning-level accessibility issues
   * @param minor - Number of minor/notice-level accessibility issues
   *
   * @description
   * This algorithm calculates a weighted accessibility score where:
   * - Critical issues have 0.4x weight (most severe impact)
   * - Severe issues have 0.8x weight (moderate impact)
   * - Minor issues have 1.0x weight (least impact)
   *
   * The final score is inverted to represent accessibility quality (higher is better).
   *
   * Example calculations:
   * 1. Perfect score:
   *    - No issues (0 critical, 0 severe, 0 minor) = 100%
   *
   * 2. Mixed issues:
   *    Input: 2 critical, 3 severe, 1 minor
   *    - Total issues = 6
   *    - Weighted sum = (2 * 0.4 + 3 * 0.8 + 1 * 1.0) = 4.2
   *    - Average = 4.2 / 6 = 0.7
   *    - Final score = 70%
   *
   * 3. Critical heavy:
   *    Input: 5 critical, 1 severe, 0 minor
   *    - Total issues = 6
   *    - Weighted sum = (5 * 0.4 + 1 * 0.8) = 2.8
   *    - Average = 2.8 / 6 = 0.47
   *    - Final score = 47%
   *
   * The score is rounded to 2 decimal places.
   *
   * @returns number - A score between 0 and 100, where 100 represents perfect accessibility
   */
  protected calculateScore(critical: number, severe: number, minor: number) {
    const total = critical + severe + minor

    if (total === 0) {
      return 100
    }

    const weightedScore = (0.4 * critical + 0.8 * severe + 1 * minor) / total

    const scoreAsPercentage = weightedScore * 100

    return Math.floor(scoreAsPercentage * 100) / 100
  }
}
