/*! html_codesniffer - v2.5.1 - 2020-04-14 */
/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Pty Ltd (ABN 77 084 670 600)                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */
;(function (root, factory) {
  var exports = factory()
  for (var prop in exports) {
    root[prop] = exports[prop]
  }
})(this, function () {
  var _global = {
    translation: {},
  }

  ;(_global.translation.cn = {
    'auditor_name': 'HTML_CodeSniffer',
    'auditor_using_standard': '使用标准',
    'auditor_standards': '标准',
    'auditor_code_snippet': '代码片断',
    'auditor_close': '关闭',
    'auditor_select_types': '选择要包含在报告中的问题类型',
    'auditor_home': '首页',
    'auditor_view_report': '查看报告',
    'auditor_report': '报告',
    'auditor_back_to_report': '回到报告',
    'auditor_previous_issue': '上一个问题',
    'auditor_next_issue': '下一个问题',
    'auditor_issue': '问题',
    'auditor_of': '总共',
    'auditor_errors': '错误',
    'auditor_error': '错误',
    'auditor_warnings': '警告',
    'auditor_warning': '警告',
    'auditor_notices': '提醒',
    'auditor_notice': '提醒',
    'auditor_toggle_display_of': '切换显示',
    'auditor_messages': '消息',
    'auditor_unable_to_point': '无法通过这个问题指向关联的元素。',
    'auditor_unable_to_point_entire': '无法指向这个问题，因为它与整个文档有关。',
    'auditor_unable_to_point_removed':
      '无法指向这个元素，因为自报告生成以来它已经从文档中被移除了。',
    'auditor_unable_to_point_outside': '无法指向这个元素，因为它位于文档的body元素外。',
    'auditor_unable_to_point_hidden':
      '无法指向这个元素，因为它已经从视图中隐藏，或它没有一个视觉表现。',
    'auditor_point_to_element': '指向这个元素',
    'auditor_unsupported_browser': '这个代码片断功能在这个浏览器中已经不被支持',
    'auditor_page': '页',
    'auditor_updated_to': 'HTML_CodeSniffer 已更新到版本',
    'auditor_view_the_changelog': '查看更新日志',
    'auditor_success_criterion': '成功标准',
    'auditor_suggested_techniques': '建议技巧',
    'auditor_applies_entire_document': '应用于全部文档',
    '1_1_1_H30.2': 'Img 元素是链接的唯一内容，但是缺少了 alt 文本，alt 文本应该描述链接的用途',
    '1_1_1_H67.1': 'alt 文本为空的 Img 元素必须具有缺席或空 title 属性',
    '1_1_1_H67.2': '标记Img元素，使其被辅助技术忽略.',
    '1_1_1_H37': '缺少alt属性的Img元素。使用alt属性指定一个短的替代文本',
    '1_1_1_G94.Image': '确保img元素的alt文本具有与图像相同的用途和显示相同的信息。',
    '1_1_1_H36': '图像提交按钮缺少alt属性。使用alt属性指定描述按钮函数的文本替代方案。',
    '1_1_1_G94.Button': '确保图像提交按钮的alt文本标识按钮的用途。',
    '1_1_1_H24':
      '图像映射中缺少alt属性的Area元素。每个area元素必须有一个描述图像映射区域功能的文本选项。',
    '1_1_1_H24.2': '确保area元素的文本替代与它引用的图像映射图像部分的用途相同。',
    '1_1_1_G73,G74':
      '如果无法在短文本替代中完整描述此图像，请确保也提供长文本替代，例如在正文文本中或通过链接。',
    '1_1_1_H2.EG5': '链接内的Img元素不能使用与链接的文本内容重复的alt文本。',
    '1_1_1_H2.EG4':
      '当链接旁边的链接包含链接文本时，链接内的Img元素的alt文本为空或缺失。考虑合并这些链接。',
    '1_1_1_H2.EG3': '链接内的Img元素不能使用与旁边的文本链接内容重复的alt文本。',
    '1_1_1_H53,ARIA6': '对象元素必须在耗尽所有其他替代后包含文本替代。',
    '1_1_1_G94,G92.Object,ARIA6':
      '检查是否可以为具有相同目的和显示相同信息的非文本内容提供短文本(如果合适，也可以是长文本)替代方案。',
    '1_1_1_H35.3': '对于不支持Applet元素的浏览器，Applet元素必须在元素的主体中包含一个文本替代。',
    '1_1_1_H35.2':
      'Applet元素必须包含alt属性，以便为支持该元素但无法加载Applet的浏览器提供文本替代。',
    '1_1_1_G94,G92.Applet':
      '检查是否可以为具有相同目的和显示相同信息的非文本内容提供短文本(如果合适，也可以是长文本)替代方案。',
    '1_2_1_G158':
      '如果此嵌入式对象仅包含预录制的音频，且不作为文本内容的替代提供，请检查是否提供了替代文本版本。',
    '1_2_1_G159,G166':
      '如果此嵌入式对象仅包含预录制的视频，且不作为文本内容的替代提供，则请检查是否提供了替代文本版本，或提供了表示等效信息的音轨。',
    '1_2_2_G87,G93':
      '如果此嵌入式对象包含预录制的同步媒体，且未作为文本内容的替代提供，请检查是否为音频内容提供了标题。',
    '1_2_3_G69,G78,G173,G8':
      '如果这个嵌入的对象包含预先录制的同步媒体，并且没有作为文本内容的替代提供，请检查是否提供了视频的音频描述和/或内容的替代文本版本。',
    '1_2_4_G9,G87,G93': '如果此嵌入式对象包含同步媒体，请检查是否为实时音频内容提供标题。',
    '1_2_5_G78,G173,G8':
      '如果此嵌入式对象包含预录制的同步媒体，请检查是否为其视频内容提供了音频描述。',
    '1_2_6_G54,G81': '如果此嵌入式对象包含预录制的同步媒体，请检查是否为其音频提供了手语解释。',
    '1_2_7_G8':
      '如果这个嵌入的对象包含同步媒体，并且前台音频中的暂停不足以让音频描述传递预录制视频的感觉，那么请检查是否提供了扩展的音频描述，无论是通过脚本还是其他版本。',
    '1_2_8_G69,G159':
      '如果这个嵌入的对象包含预先录制的同步媒体或视频内容，请检查是否提供了内容的另一个文本版本。',
    '1_2_9_G150,G151,G157':
      '如果这个嵌入的对象包含实时音频内容，请检查是否提供了内容的另一个文本版本。',
    '1_3_1_F92,ARIA4': '此元素的角色是“表示”，但包含具有语义意义的子元素。',
    '1_3_1_H44.NonExistent': '此标签的“for”属性包含文档中不存在的ID。',
    '1_3_1_H44.NonExistentFragment': '此标签的“for”属性包含文档片段中不存在的ID。',
    '1_3_1_H44.NotFormControl':
      '这个label的 "for"属性包含一个非表单控件元素的ID。确保您为预期的元素输入了正确的ID。',
    '1_3_1_H65': '此表单控件的“title”属性为空或仅包含空格。为了标签测试的目的，它将被忽略。',
    '1_3_1_ARIA6':
      '此表单控件具有“aria-label”属性，该属性为空或仅包含空格。为了标签测试的目的，它将被忽略。',
    '1_3_1_ARIA16,ARIA9':
      '此表单控件包含一个aria-labelledby属性, 但是它包含一个ID"{{id}}" 它不存在于元素中。出于标签测试的目的，aria-labelledby属性将被忽略。',
    '1_3_1_F68.Hidden': '这个隐藏的表单字段以某种方式进行了标记。不需要为隐藏的表单字段添加标签。',
    '1_3_1_F68.HiddenAttr':
      '这个表单字段打算隐藏(使用“hidden”属性)，但也以某种方式标记。不需要为隐藏的表单字段添加标签。',
    '1_3_1_F68':
      '这个表单字段应该以某种方式进行标记。使用label元素(带有“for”属性或围绕表单字段)，或者适当使用“title”、“aria-label”或“aria-labelledby”属性。',
    '1_3_1_H49.': '在HTML5中使用的表示标记已经过时。',
    '1_3_1_H49.AlignAttr': '对齐属性。',
    '1_3_1_H49.Semantic': '语义标记应该用于标记强调的或特殊的文本，以便通过编程确定文本。',
    '1_3_1_H49.AlignAttr.Semantic':
      '语义标记应该用于标记强调的或特殊的文本，以便通过编程确定文本。',
    '1_3_1_H42': '如果要将此内容用作标题，则应使用标题标记。',
    '1_3_1_H63.3': '表单元格的作用域属性无效。有效值是row、col、rowgroup或colgroup。',
    '1_3_1_H63.2': 'td元素上作为其他元素标题的作用域属性在HTML5中已经过时了。使用th元素代替。',
    '1_3_1_H43.ScopeAmbiguous':
      '元素的作用域属性在具有多级标题的表中是不明确的。在td元素上使用headers属性。',
    '1_3_1_H43.IncorrectAttr':
      '此td元素上不正确的headers属性。期望的“{{expected}}”，但发现“{{actual}}”',
    '1_3_1_H43.HeadersRequired':
      'td元素与其关联的th元素之间的关系没有定义。由于该表有多个层次的th元素，因此必须在td元素上使用headers属性。',
    '1_3_1_H43.MissingHeaderIds':
      '并非该表中的所有th元素都包含id属性。这些单元格应该包含id，以便td元素的header属性可以引用它们。',
    '1_3_1_H43.MissingHeadersAttrs':
      '并非此表中的所有td元素都包含header属性。每个headers属性应该列出与该单元格关联的所有th元素的id。',
    '1_3_1_H43,H63':
      'td元素与其关联的th元素之间的关系没有定义。要么在th元素上使用scope属性，要么在td元素上使用headers属性。',
    '1_3_1_H63.1':
      '并非该表中的所有th元素都具有范围属性。这些单元格应该包含一个范围属性来标识它们与td元素的关联。',
    '1_3_1_H73.3.LayoutTable':
      '此表似乎用于布局，但包含摘要属性。布局表不能包含摘要属性，如果提供，则必须为空。',
    '1_3_1_H39,H73.4':
      '如果此表是一个数据表，并且同时具有summary属性和标题元素，则该摘要不应复制标题。',
    '1_3_1_H73.3.Check':
      '如果该表是一个数据表，请检查summary属性是否描述了该表的组织或解释了如何使用该表。',
    '1_3_1_H73.3.NoSummary':
      '如果这个表是一个数据表，可以考虑使用table元素的summary属性来概述这个表。',
    '1_3_1_H39.3.LayoutTable': '此表似乎用于布局，但包含标题元素。布局表不能包含标题。',
    '1_3_1_H39.3.Check': '如果这个表是一个数据表，请检查标题元素是否准确地描述了这个表。',
    '1_3_1_H39.3.NoCaption': '如果这个表是一个数据表，可以考虑使用表元素的标题元素来标识这个表。',
    '1_3_1_H71.NoLegend':
      'Fieldset不包含传奇元素。所有字段集都应该包含一个描述字段组描述的legend元素。',
    '1_3_1_H85.2': '如果此选择列表包含相关选项组，则应将其与optgroup分组。',
    '1_3_1_H71.SameName':
      '如果这些单选按钮或复选框需要进一步的组级描述，则它们应该包含在fieldset元素中。',
    '1_3_1_H48.1':
      '这个内容看起来像是使用纯文本模拟一个无序列表。如果是这样，用ul元素标记此内容将向文档添加适当的结构信息。',
    '1_3_1_H48.2':
      '这个内容看起来像是使用纯文本模拟有序列表。如果是这样，用ol元素标记此内容将向文档添加适当的结构信息。',
    '1_3_1_G141_a':
      '标题结构没有逻辑嵌套。这个h{{headingNum}}元素似乎是主要的文档标题，因此应该是h1元素。',
    '1_3_1_G141_b':
      '标题结构没有逻辑嵌套。这个h{{headingNum}}元素应该是一个正确嵌套的h{{properHeadingNum}}。',
    '1_3_1_H42.2': '没有内容的标题标签。不打算作为标题的文本不应该用标题标记。',
    '1_3_1_H48': '如果此元素包含导航部分，建议将其标记为列表。',
    '1_3_1_LayoutTable':
      '此表似乎是一个布局表。如果要将其改为数据表，请确保使用th元素标识头单元格。',
    '1_3_1_DataTable':
      '这个表似乎是一个数据表。如果要将其改为布局表，请确保没有th元素，没有摘要或标题。',
    '1_3_2_G57': '当线性化时，检查内容是否按有意义的顺序排列，例如禁用样式表时。',
    '1_3_3_G96': '在提供理解内容的指令时，不要仅依赖感官特征(如形状、大小或位置)来描述对象。',
    '1_4_1_G14,G18': '检查仅使用颜色传达的任何信息在文本或其他视觉线索中是否可用。',
    '1_4_2_F23': '如果此元素包含自动播放超过3秒的音频，请检查是否具有暂停、停止或静音音频的功能。',
    '1_4_3_F24.BGColour': '检查此元素是否具有继承的前景颜色，以补充相应的内联背景颜色或图像。',
    '1_4_3_F24.FGColour': '检查此元素是否具有继承的背景颜色或图像，以补充相应的内联前景颜色。',
    '1_4_3_G18_or_G145.Abs':
      '此元素绝对定位，无法确定背景颜色。确保文本与背景中所有被覆盖部分的对比度至少为{{required}}:1。',
    '1_4_3_G18_or_G145.BgImage':
      '这个元素的文本被放置在背景图像上。确保文本与图像所有覆盖部分的对比度至少为{{required}}:1。',
    '1_4_3_G18_or_G145.Alpha':
      '此元素的文本或背景包含透明度。确保文本和背景之间的对比度至少为{{required}}:1。',
    '1_4_3_G18_or_G145.Fail':
      '此元素在此一致性级别上的对比度不足。期望的对比度比至少为{{required}}:1，但是该元素中的文本的对比度比为{{value}}:1。',
    '1_4_3_G18_or_G145.Fail.Recomendation': '建议:改变',
    '1_4_3_G18_or_G145.Fail.Recomendation.Text': '文本颜色',
    '1_4_3_G18_or_G145.Fail.Recomendation.Background': '背景',
    '1_4_4_G142':
      '检查文本可以在不使用辅助技术的情况下调整大小，最高可达200%，而不会丢失内容或功能。',
    '1_4_5_G140,C22,C30.AALevel':
      '如果所使用的技术可以达到视觉呈现的效果，请检查文字是用来传达信息而不是文字的图像，除非文字的图像对所传达的信息是必不可少的，或者可以根据用户的需求进行视觉定制。',
    '1_4_6_G18_or_G17.Abs':
      '此元素绝对定位，无法确定背景颜色。确保文本与背景中所有被覆盖部分的对比度至少为{{required}}:1。',
    '1_4_6_G18_or_G17.BgImage':
      '这个元素的文本被放置在背景图像上。确保文本与图像所有覆盖部分的对比度至少为{{required}}:1。',
    '1_4_6_G18_or_G17.Fail':
      '此元素在此一致性级别上的对比度不足。期望的对比度比至少为{{required}}:1，但是该元素中的文本的对比度比为{{value}}:1。',
    '1_4_6_G18_or_G17.Fail.Recomendation': '建议:改变',
    '1_4_6_G18_or_G17.Fail.Recomendation.Text': '文本颜色',
    '1_4_6_G18_or_G17.Fail.Recomendation.Background': '背景',
    '1_4_7_G56':
      '对于这个元素中主要是语音(如旁白)的预先录制的纯音频内容，任何背景声音都应该是可哑的，或者至少比语音低20分贝(或大约4倍)。',
    '1_4_8_G148,G156,G175':
      '检查是否有一种机制可供用户通过Web页面或浏览器为文本块选择前景和背景颜色。',
    '1_4_8_H87,C20':
      '检查是否存在一种机制，将文本块的宽度减少到不超过80个字符(或中文、日文或韩文的40个字符)。',
    '1_4_8_C19,G172,G169':
      '检查文本块是否完全对齐——也就是说，在左边缘和右边缘——或者存在一种删除完全对齐的机制。',
    '1_4_8_G188,C21':
      '检查文本块中的行间距在段落中至少为150%，段落间距至少为行间距的1.5倍，或者有实现这一点的机制。',
    '1_4_8_H87,G146,C26':
      '检查文本是否可以在不使用辅助技术的情况下调整大小至200%，而不需要用户在全屏窗口上水平滚动。',
    '1_4_9_G140,C22,C30.NoException':
      '检查文本的图像是否仅用于纯装饰，或者文本的特定表示对于所传递的信息是必不可少的。',
    '2_1_1_G90': '确保事件处理程序为此元素提供的功能可通过键盘获得',
    '2_1_1_SCR20.DblClick': '确保通过键盘双击此元素提供的功能可用。',
    '2_1_1_SCR20.MouseOver': '确保通过键盘在此元素上单击所提供的功能可用;例如，使用焦点事件。',
    '2_1_1_SCR20.MouseOut': '确保鼠标移出此元素所提供的功能可通过键盘获得;例如，使用blur事件。',
    '2_1_1_SCR20.MouseMove': '确保通过键盘移动此元素上的鼠标所提供的功能可用。',
    '2_1_1_SCR20.MouseDown':
      '确保通过键盘在此元素上按下鼠标所提供的功能可用;例如，使用keydown事件。',
    '2_1_1_SCR20.MouseUp': '确保通过键盘在此元素上单击鼠标所提供的功能可用;例如，使用keyup事件。',
    '2_1_2_F10': '检查这个applet或插件是否能够在使用键盘时将焦点从自身移开。',
    '2_2_1_F40.2': '元刷新标记用于重定向到另一个页面，时间限制不为零。用户无法控制这个时间限制。',
    '2_2_1_F41.2': '用于刷新当前页面的元刷新标记。用户无法控制此刷新的时间限制。',
    '2_2_2_SCR33,SCR22,G187,G152,G186,G191':
      '如果内容的任何部分移动、滚动或闪烁超过5秒，或自动更新，请检查是否有可用的机制来暂停、停止或隐藏内容。',
    '2_2_2_F4': '确保有一种机制可以在5秒内停止这个闪烁元素。',
    '2_2_2_F47': 'Blink元素不能满足眨眼信息在5秒内停止的要求。',
    '2_2_3_G5': '除了非交互式同步媒体和实时事件外，检查时间不是事件或活动的重要组成部分。',
    '2_2_4_SCR14': '检查所有中断(包括对内容的更新)都可以被用户延迟或抑制，紧急情况除外。',
    '2_2_5_G105,G181':
      '如果此Web页面是具有非活动时间限制的一组Web页面的一部分，请检查经过身份验证的用户在重新进行身份验证后是否可以继续该活动而不会丢失数据。',
    '2_3_1_G19,G176':
      '检查内容的任何组件在任何1秒周期内闪烁的次数都不超过3次，或者任何闪烁区域的大小都不够小。',
    '2_3_2_G19': '检查内容的任何组件在任何1秒内闪烁的次数都不超过3次。',
    '2_4_1_H64.1': 'Iframe元素需要一个非空的title属性来标识框架。',
    '2_4_1_H64.2': '检查此元素的title属性是否包含标识框架的文本。',
    '2_4_1_G1,G123,G124,H69':
      '确保可以绕过任何通用导航元素;例如，通过使用跳过链接、头元素或ARIA地标角色。',
    '2_4_1_G1,G123,G124.NoSuchID': '这个链接指向文档中一个名为“{{id}}”的锚，但是不存在同名的锚。',
    '2_4_1_G1,G123,G124.NoSuchIDFragment':
      '这个链接指向文档中一个名为“{{id}}”的锚，但是在测试的片段中不存在同名的锚。',
    '2_4_2_H25.1.NoHeadEl': '没有标题部分可以放置描述性标题元素。',
    '2_4_2_H25.1.NoTitleEl': '应该使用head部分中的非空title元素为文档提供标题。',
    '2_4_2_H25.1.EmptyTitle': '标题部分中的title元素应该是非空的。',
    '2_4_2_H25.2': '检查title元素是否描述了文档。',
    '2_4_3_H4.2': '如果使用tabindex，请检查tabindex属性指定的选项卡顺序是否遵循内容中的关系。',
    '2_4_4_H77,H78,H79,H80,H81,H33':
      '检查链接文本与以编程方式确定的链接上下文或其title属性相结合，以确定链接的用途。',
    '2_4_4_H77,H78,H79,H80,H81':
      '检查链接文本与以编程方式确定的链接上下文的组合是否标识了链接的用途。',
    '2_4_5_G125,G64,G63,G161,G126,G185':
      '如果此Web页面不是线性流程的一部分，请检查在一组Web页面中定位此Web页面的方法是否不止一种。',
    '2_4_6_G130,G131': '检查标题和标签是否描述了主题或目的。',
    '2_4_7_G149,G165,G195,C15,SCR31':
      '检查至少有一种操作模式，可以将键盘焦点指示器可视地定位在用户界面控件上。',
    '2_4_8_H59.1': '链接元素只能位于文档的头部部分。',
    '2_4_8_H59.2a': 'Link元素缺少标识链接类型的非空rel属性。',
    '2_4_8_H59.2b': 'Link元素缺少一个指向被链接资源的非空href属性。',
    '2_4_9_H30': '检查链接的文本是否描述了链接的目的。',
    '3_1_1_H57.2': 'html元素应该具有描述文档语言的lang或xml:lang属性。',
    '3_1_1_H57.3.Lang': '文档元素的lang属性中指定的语言似乎不是格式良好的。',
    '3_1_1_H57.3.XmlLang': '文档元素的xml:lang属性中指定的语言似乎不是格式良好的。',
    '3_1_2_H58': '确保在适当的情况下，使用元素上的lang和/或xml:lang属性标记语言中的任何更改。',
    '3_1_2_H58.1.Lang': '此元素的lang属性中指定的语言似乎不是格式良好的。',
    '3_1_2_H58.1.XmlLang': '此元素的xml:lang属性中指定的语言似乎不是格式良好的。',
    '3_1_3_H40,H54,H60,G62,G70':
      '检查是否有一种机制可用于识别以不寻常或受限方式使用的单词或短语的特定定义，包括习语和行话。',
    '3_1_4_G102,G55,G62,H28,G97': '检查是否有识别缩写的展开形式或含义的机制。',
    '3_1_5_G86,G103,G79,G153,G160':
      '如果内容要求阅读能力高于初中教育水平，则应提供补充内容或替代版本。',
    '3_1_6_H62.1.HTML5': 'Ruby元素不包含rt元素，rt元素包含其正文的发音信息。',
    '3_1_6_H62.1.XHTML11': 'Ruby元素不包含rt元素，rt元素包含rb元素内文本的发音信息。',
    '3_1_6_H62.2': 'Ruby元素不包含rp元素，rp元素为不支持Ruby文本的浏览器提供额外的标点符号。',
    '3_2_1_G107': '检查当这个输入字段接收到焦点时，没有发生上下文更改。',
    '3_2_2_H32.2':
      '此表单不包含提交按钮，这将为无法使用键盘提交表单的用户带来问题。提交按钮是类型属性为“Submit”或“image”的输入元素，或类型为“Submit”或省略/无效的按钮元素。',
    '3_2_3_G61':
      '检查在多个Web页面上重复的导航机制在每次重复时都以相同的相对顺序出现，除非用户发起了更改。',
    '3_2_4_G197': '检查在此Web页面中具有相同功能的组件是否在其所属的Web页面集中一致地标识。',
    '3_2_5_H83.3': '检查此链接的链接文本是否包含指示该链接将在新窗口中打开的信息。',
    '3_3_1_G83,G84,G85':
      '如果在此表单中自动检测到输入错误，请检查错误项是否已标识，并以文本形式向用户描述错误。',
    '3_3_2_G131,G89,G184,H90': '检查此表单中是否为用户输入提供了描述性标签或说明(包括所需字段)。',
    '3_3_3_G177':
      '请检查此表单是否提供了对用户输入错误的建议更正，除非它会危及内容的安全性或用途。',
    '3_3_4_G98,G99,G155,G164,G168.LegalForms':
      '如果此表单将用户绑定到财务或法律承诺、修改/删除用户可控制的数据或提交测试响应，请确保提交是可逆的、检查输入错误和/或由用户确认的。',
    '3_3_5_G71,G184,G193': '在web页面和/或控件级别检查此表单是否提供上下文敏感的帮助。',
    '3_3_6_G98,G99,G155,G164,G168.AllForms':
      '请检查提交到此表单的内容是否可逆，是否有输入错误，以及/或是否得到用户的确认。',
    '4_1_1_F77': '在网页上找到重复的id属性值“{{id}}”。',
    '4_1_2_H91.A.Empty':
      '锚元素，具有ID，但没有href或链接文本。考虑将其ID移动到父元素或附近的元素。',
    '4_1_2_H91.A.EmptyWithName':
      '锚元素，具有名称属性，但没有href或链接文本。考虑将name属性移动为父元素或附近元素的ID。',
    '4_1_2_H91.A.EmptyNoId': '没有链接内容、没有名称和/或ID属性的锚元素。',
    '4_1_2_H91.A.NoHref':
      '锚元素不应用于定义页内链接目标。如果不将ID用于其他目的(如CSS或脚本)，可以考虑将其移动到父元素。',
    '4_1_2_H91.A.Placeholder': '找到带有链接内容的锚元素，但未提供href、ID或name属性。',
    '4_1_2_H91.A.NoContent': '找到具有有效href属性的锚元素，但未提供链接内容。',
    '4_1_2_input_element': '输入元素',
    '4_1_2_role_of_button': '元素的作用是“按钮”，但是',
    '4_1_2_element_content': '元素内容',
    '4_1_2_element': '元素',
    '4_1_2_msg_pattern':
      '这个{{msgNodeType}}没有可访问性API可用的名称。有效的名称是:{{builtAttrs}}。',
    '4_1_2_msg_pattern2': '这个{{msgNodeType}}没有可访问性API可用的值。',
    '4_1_2_msg_add_one': '通过向元素添加内容来添加一个。',
    '4_1_2_msg_pattern3':
      '这个{{msgNodeType}}没有初始选择的选项。根据HTML版本的不同，公开给可访问性API的值可能是未定义的。',
    '4_1_2_value_exposed_using_attribute': '使用{{requiredValue}}属性公开一个值。',
    '4_1_2_value_exposed_using_element': '使用{{requiredValue}}元素公开一个值。',
  }),
    (_global.translation.en = {
      'auditor_name': 'HTML_CodeSniffer by Squiz',
      'auditor_using_standard': 'Using standard',
      'auditor_standards': 'Standards',
      'auditor_code_snippet': 'Code Snippet',
      'auditor_close': 'Close',
      'auditor_select_types': 'Select the types of issues to include in the report',
      'auditor_home': 'Home',
      'auditor_view_report': 'View Report',
      'auditor_report': 'Report',
      'auditor_back_to_report': 'Back to Report',
      'auditor_previous_issue': 'Previous Issue',
      'auditor_next_issue': 'Next Issue',
      'auditor_issue': 'Issue',
      'auditor_of': 'of',
      'auditor_errors': 'Errors',
      'auditor_error': 'Error',
      'auditor_warnings': 'Warnings',
      'auditor_warning': 'Warning',
      'auditor_notices': 'Notices',
      'auditor_notice': 'Notice',
      'auditor_toggle_display_of': 'Toggle display of',
      'auditor_messages': 'messages',
      'auditor_unable_to_point': 'Unable to point to the element associated with this issue.',
      'auditor_unable_to_point_entire':
        'Unable to point to this issue, as it relates to the entire document.',
      'auditor_unable_to_point_removed':
        'Unable to point to this element as it has been removed from the document since the report was generated.',
      'auditor_unable_to_point_outside':
        "Unable to point to this element because it is located outside the document's body element.",
      'auditor_unable_to_point_hidden':
        'Unable to point to this element because it is hidden from view, or does not have a visual representation.',
      'auditor_point_to_element': 'Point to Element',
      'auditor_unsupported_browser':
        'The code snippet functionality is not supported in this browser.',
      'auditor_page': 'Page',
      'auditor_updated_to': 'HTML_CodeSniffer has been updated to version',
      'auditor_view_the_changelog': 'View the changelog',
      'auditor_success_criterion': 'Success Criterion',
      'auditor_suggested_techniques': 'Suggested Techniques',
      'auditor_applies_entire_document': 'This applies to the entire document',
      '1_1_1_H30.2':
        'Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.',
      '1_1_1_H67.1': 'Img element with empty alt text must have absent or empty title attribute.',
      '1_1_1_H67.2': 'Img element is marked so that it is ignored by Assistive Technology.',
      '1_1_1_H37':
        'Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.',
      '1_1_1_G94.Image':
        "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
      '1_1_1_H36':
        "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
      '1_1_1_G94.Button':
        "Ensure that the image submit button's alt text identifies the purpose of the button.",
      '1_1_1_H24':
        'Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.',
      '1_1_1_H24.2':
        "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
      '1_1_1_G73,G74':
        'If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.',
      '1_1_1_H2.EG5':
        'Img element inside a link must not use alt text that duplicates the text content of the link.',
      '1_1_1_H2.EG4':
        'Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.',
      '1_1_1_H2.EG3':
        'Img element inside a link must not use alt text that duplicates the content of a text link beside it.',
      '1_1_1_H53,ARIA6':
        'Object elements must contain a text alternative after all other alternatives are exhausted.',
      '1_1_1_G94,G92.Object,ARIA6':
        'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.',
      '1_1_1_H35.3':
        "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
      '1_1_1_H35.2':
        'Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.',
      '1_1_1_G94,G92.Applet':
        'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.',
      '1_2_1_G158':
        'If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.',
      '1_2_1_G159,G166':
        'If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.',
      '1_2_2_G87,G93':
        'If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.',
      '1_2_3_G69,G78,G173,G8':
        'If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.',
      '1_2_4_G9,G87,G93':
        'If this embedded object contains synchronised media, check that captions are provided for live audio content.',
      '1_2_5_G78,G173,G8':
        'If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.',
      '1_2_6_G54,G81':
        'If this embedded object contains pre-recorded synchronised media, check that a sign language interpretation is provided for its audio.',
      '1_2_7_G8':
        'If this embedded object contains synchronised media, and where pauses in foreground audio is not sufficient to allow audio descriptions to convey the sense of pre-recorded video, check that an extended audio description is provided, either through scripting or an alternate version.',
      '1_2_8_G69,G159':
        'If this embedded object contains pre-recorded synchronised media or video-only content, check that an alternative text version of the content is provided.',
      '1_2_9_G150,G151,G157':
        'If this embedded object contains live audio-only content, check that an alternative text version of the content is provided.',
      '1_3_1_F92,ARIA4':
        'This element\'s role is "presentation" but contains child elements with semantic meaning.',
      '1_3_1_H44.NonExistent':
        'This label\'s "for" attribute contains an ID that does not exist in the document.',
      '1_3_1_H44.NonExistentFragment':
        'This label\'s "for" attribute contains an ID that does not exist in the document fragment.',
      '1_3_1_H44.NotFormControl':
        'This label\'s "for" attribute contains an ID for an element that is not a form control. Ensure that you have entered the correct ID for the intended element.',
      '1_3_1_H65':
        'This form control has a "title" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
      '1_3_1_ARIA6':
        'This form control has an "aria-label" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
      '1_3_1_ARIA16,ARIA9':
        'This form control contains an aria-labelledby attribute, however it includes an ID "{{id}}" that does not exist on an element. The aria-labelledby attribute will be ignored for labelling test purposes.',
      '1_3_1_F68.Hidden':
        'This hidden form field is labelled in some way. There should be no need to label a hidden form field.',
      '1_3_1_F68.HiddenAttr':
        'This form field is intended to be hidden (using the "hidden" attribute), but is also labelled in some way. There should be no need to label a hidden form field.',
      '1_3_1_F68':
        'This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.',
      '1_3_1_H49.': 'Presentational markup used that has become obsolete in HTML5.',
      '1_3_1_H49.AlignAttr': 'Align attributes.',
      '1_3_1_H49.Semantic':
        'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.',
      '1_3_1_H49.AlignAttr.Semantic':
        'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.',
      '1_3_1_H42': 'Heading markup should be used if this content is intended as a heading.',
      '1_3_1_H63.3':
        'Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.',
      '1_3_1_H63.2':
        'Scope attributes on td elements that act as headings for other elements are obsolete in HTML5. Use a th element instead.',
      '1_3_1_H43.ScopeAmbiguous':
        'Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.',
      '1_3_1_H43.IncorrectAttr':
        'Incorrect headers attribute on this td element. Expected "{{expected}}" but found "{{actual}}"',
      '1_3_1_H43.HeadersRequired':
        'The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.',
      '1_3_1_H43.MissingHeaderIds':
        "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
      '1_3_1_H43.MissingHeadersAttrs':
        'Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.',
      '1_3_1_H43,H63':
        'The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.',
      '1_3_1_H63.1':
        'Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.',
      '1_3_1_H73.3.LayoutTable':
        'This table appears to be used for layout, but contains a summary attribute. Layout tables must not contain summary attributes, or if supplied, must be empty.',
      '1_3_1_H39,H73.4':
        'If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.',
      '1_3_1_H73.3.Check':
        "If this table is a data table, check that the summary attribute describes the table's organization or explains how to use the table.",
      '1_3_1_H73.3.NoSummary':
        'If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.',
      '1_3_1_H39.3.LayoutTable':
        'This table appears to be used for layout, but contains a caption element. Layout tables must not contain captions.',
      '1_3_1_H39.3.Check':
        'If this table is a data table, check that the caption element accurately describes this table.',
      '1_3_1_H39.3.NoCaption':
        'If this table is a data table, consider using a caption element to the table element to identify this table.',
      '1_3_1_H71.NoLegend':
        'Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.',
      '1_3_1_H85.2':
        'If this selection list contains groups of related options, they should be grouped with optgroup.',
      '1_3_1_H71.SameName':
        'If these radio buttons or check boxes require a further group-level description, they should be contained within a fieldset element.',
      '1_3_1_H48.1':
        'This content looks like it is simulating an unordered list using plain text. If so, marking up this content with a ul element would add proper structure information to the document.',
      '1_3_1_H48.2':
        'This content looks like it is simulating an ordered list using plain text. If so, marking up this content with an ol element would add proper structure information to the document.',
      '1_3_1_G141_a':
        'The heading structure is not logically nested. This h{{headingNum}} element appears to be the primary document heading, so should be an h1 element.',
      '1_3_1_G141_b':
        'The heading structure is not logically nested. This h{{headingNum}} element should be an h{{properHeadingNum}} to be properly nested.',
      '1_3_1_H42.2':
        'Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.',
      '1_3_1_H48':
        'If this element contains a navigation section, it is recommended that it be marked up as a list.',
      '1_3_1_LayoutTable':
        'This table appears to be a layout table. If it is meant to instead be a data table, ensure header cells are identified using th elements.',
      '1_3_1_DataTable':
        'This table appears to be a data table. If it is meant to instead be a layout table, ensure there are no th elements, and no summary or caption.',
      '1_3_2_G57':
        'Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.',
      '1_3_3_G96':
        'Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.',
      '1_3_4.RestrictView':
        'Check that content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.',
      '1_3_5_H98.FaultyValue':
        'This element contains a potentially faulty value in its autocomplete attribute: {{valuesStr}}.',
      '1_3_5_H98.InvalidAutocomplete_Text':
        'Invalid autocomplete value: {{x}}. Element does not belong to Text control group.',
      '1_3_5_H98.InvalidAutocomplete_Multiline':
        'Invalid autocomplete value: {{x}}. Element does not belong to Multiline control group.',
      '1_3_5_H98.InvalidAutocomplete_Password':
        'Invalid autocomplete value: {{x}}. Element does not belong to Password control group.',
      '1_3_5_H98.InvalidAutocomplete_Url':
        'Invalid autocomplete value: {{x}}. Element does not belong to Url control group.',
      '1_3_5_H98.InvalidAutocomplete_Telephone':
        'Invalid autocomplete value: {{x}}. Element does not belong to Telephone control group.',
      '1_3_5_H98.InvalidAutocomplete_Numeric':
        'Invalid autocomplete value: {{x}}. Element does not belong to Numeric control group.',
      '1_3_5_H98.InvalidAutocomplete_Month':
        'Invalid autocomplete value: {{x}}. Element does not belong to Month control group.',
      '1_3_5_H98.InvalidAutocomplete_Date':
        'Invalid autocomplete value: {{x}}. Element does not belong to Date control group.',
      '1_3_5_H98.Purpose':
        'Check that the input field serves a purpose identified in the Input Purposes for User Interface Components section; and that the content is implemented using technologies with support for identifying the expected meaning for form input data.',
      '1_3_5_H98.MissingAutocomplete':
        'This element does not have an autocomplete attribute. If this field collects information about the user, consider adding one to comply with this Success Criterion.',
      '1_3_6_ARIA11.Check':
        'Check that the purpose of User Interface Components, icons, and regions can be programmatically determined.',
      '1_4_1_G14,G18':
        'Check that any information conveyed using colour alone is also available in text, or through other visual cues.',
      '1_4_2_F23':
        'If this element contains audio that plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.',
      '1_4_3_F24.BGColour':
        'Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.',
      '1_4_3_F24.FGColour':
        'Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.',
      '1_4_3_G18_or_G145.Abs':
        'This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.',
      '1_4_3_G18_or_G145.BgImage':
        "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
      '1_4_3_G18_or_G145.Alpha':
        "This element's text or background contains transparency. Ensure the contrast ratio between the text and background are at least {{required}}:1.",
      '1_4_3_G18_or_G145.Fail':
        'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.',
      '1_4_3_G18_or_G145.Fail.Recomendation': 'Recommendation: ',
      '1_4_3_G18_or_G145.Fail.Recomendation.Text': 'change text colour to {{value}}',
      '1_4_3_G18_or_G145.Fail.Recomendation.Background': 'change background to {{value}}',
      '1_4_4_G142':
        'Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
      '1_4_5_G140,C22,C30.AALevel':
        "If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user's requirements.",
      '1_4_6_G18_or_G17.Abs':
        'This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.',
      '1_4_6_G18_or_G17.BgImage':
        "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
      '1_4_6_G18_or_G17.Fail':
        'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.',
      '1_4_6_G18_or_G17.Fail.Recomendation': 'Recommendation: ',
      '1_4_6_G18_or_G17.Fail.Recomendation.Text': 'change text colour to {{value}}',
      '1_4_6_G18_or_G17.Fail.Recomendation.Background': 'change background to {{value}}',
      '1_4_7_G56':
        'For pre-recorded audio-only content in this element that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.',
      '1_4_8_G148,G156,G175':
        'Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.',
      '1_4_8_H87,C20':
        'Check that a mechanism exists to reduce the width of a block of text to no more than 80 characters (or 40 in Chinese, Japanese or Korean script).',
      '1_4_8_C19,G172,G169':
        'Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.',
      '1_4_8_G188,C21':
        'Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.',
      '1_4_8_H87,G146,C26':
        'Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.',
      '1_4_9_G140,C22,C30.NoException':
        'Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.',
      '1_4_10_C32,C31,C33,C38,SCR34,G206.Check':
        'Check that content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:     Vertical scrolling content at a width equivalent to 320 CSS pixels;     Horizontal scrolling content at a height equivalent to 256 CSS pixels;     Except for parts of the content which require two-dimensional layout for usage or meaning.',
      '1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed':
        'This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.',
      '1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling':
        'Preformatted text may require scrolling in two dimensions, which is considered a failure of this Success Criterion.',
      '1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom':
        "Interfering with a user agent's ability to zoom may be a failure of this Success Criterion.",
      '1_4_11_G195,G207,G18,G145,G174,F78.Check':
        'Check that the visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):     User Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;     Graphical Objects: Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.',
      '1_4_12_C36,C35.Check':
        'Check that no loss of content or functionality occurs by setting all of the following and by changing no other style property:              Line height (line spacing) to at least 1.5 times the font size;         Spacing following paragraphs to at least 2 times the font size;         Letter spacing (tracking) to at least 0.12 times the font size;         Word spacing to at least 0.16 times the font size.',
      '1_4_13_F95.Check':
        'Check that where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:              Dismissable: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;         Hoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;         Persistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.',
      '2_1_1_G90':
        'Ensure the functionality provided by an event handler for this element is available through the keyboard',
      '2_1_1_SCR20.DblClick':
        'Ensure the functionality provided by double-clicking on this element is available through the keyboard.',
      '2_1_1_SCR20.MouseOver':
        'Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.',
      '2_1_1_SCR20.MouseOut':
        'Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.',
      '2_1_1_SCR20.MouseMove':
        'Ensure the functionality provided by moving the mouse on this element is available through the keyboard.',
      '2_1_1_SCR20.MouseDown':
        'Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.',
      '2_1_1_SCR20.MouseUp':
        'Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.',
      '2_1_2_F10':
        'Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.',
      '2_1_4.Check':
        'Check that if a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:              Turn off: A mechanism is available to turn the shortcut off;         Remap: A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc);         Active only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.     ',
      '2_2_1_F40.2':
        'Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.',
      '2_2_1_F41.2':
        'Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.',
      '2_2_2_SCR33,SCR22,G187,G152,G186,G191':
        'If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.',
      '2_2_2_F4':
        'Ensure there is a mechanism available to stop this blinking element in less than five seconds.',
      '2_2_2_F47':
        'Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.',
      '2_2_3_G5':
        'Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.',
      '2_2_4_SCR14':
        'Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.',
      '2_2_5_G105,G181':
        'If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.',
      '2_2_6.Check':
        'Check that users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.',
      '2_3_1_G19,G176':
        'Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.',
      '2_3_2_G19':
        'Check that no component of the content flashes more than three times in any 1-second period.',
      '2_3_3.Check':
        'Check that motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.',
      '2_4_1_H64.1':
        'Iframe element requires a non-empty title attribute that identifies the frame.',
      '2_4_1_H64.2':
        'Check that the title attribute of this element contains text that identifies the frame.',
      '2_4_1_G1,G123,G124,H69':
        'Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.',
      '2_4_1_G1,G123,G124.NoSuchID':
        'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name.',
      '2_4_1_G1,G123,G124.NoSuchIDFragment':
        'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name in the fragment tested.',
      '2_4_2_H25.1.NoHeadEl':
        'There is no head section in which to place a descriptive title element.',
      '2_4_2_H25.1.NoTitleEl':
        'A title should be provided for the document, using a non-empty title element in the head section.',
      '2_4_2_H25.1.EmptyTitle': 'The title element in the head section should be non-empty.',
      '2_4_2_H25.2': 'Check that the title element describes the document.',
      '2_4_3_H4.2':
        'If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.',
      '2_4_4_H77,H78,H79,H80,H81,H33':
        'Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.',
      '2_4_4_H77,H78,H79,H80,H81':
        'Check that the link text combined with programmatically determined link context identifies the purpose of the link.',
      '2_4_5_G125,G64,G63,G161,G126,G185':
        'If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.',
      '2_4_6_G130,G131': 'Check that headings and labels describe topic or purpose.',
      '2_4_7_G149,G165,G195,C15,SCR31':
        'Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.',
      '2_4_8_H59.1': 'Link elements can only be located in the head section of the document.',
      '2_4_8_H59.2a':
        'Link element is missing a non-empty rel attribute identifying the link type.',
      '2_4_8_H59.2b':
        'Link element is missing a non-empty href attribute pointing to the resource being linked.',
      '2_4_9_H30': 'Check that text of the link describes the purpose of the link.',
      '2_5_1.Check':
        'Check that all functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.',
      '2_5_2.SinglePointer_Check':
        'Check that for functionality that can be operated using a single pointer, at least one of the following is true:         No Down-Event: The down-event of the pointer is not used to execute any part of the function;         Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.',
      '2_5_2.Mousedown_Check':
        'This element has an mousedown event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true:         No Down-Event: The down-event of the pointer is not used to execute any part of the function;         Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.',
      '2_5_2.Touchstart_Check':
        'This element has a touchstart event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true:              No Down-Event: The down-event of the pointer is not used to execute any part of the function;         Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.',
      '2_5_3_F96.Check':
        'Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.',
      '2_5_3_F96.AccessibleName':
        'Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.',
      '2_5_4.Check':
        'Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:              Supported Interface: The motion is used to operate functionality through an accessibility supported interface;         Essential: The motion is essential for the function and doing so would invalidate the activity.     ',
      '2_5_4.Devicemotion':
        'This element has a devicemotion event listener. Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:              Supported Interface: The motion is used to operate functionality through an accessibility supported interface;         Essential: The motion is essential for the function and doing so would invalidate the activity.     ',
      '2_5_5.Check':
        'Check that the size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:              Equivalent: The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;         Inline: The target is in a sentence or block of text;         User Agent Control: The size of the target is determined by the user agent and is not modified by the author;         Essential: A particular presentation of the target is essential to the information being conveyed.     ',
      '2_5_6.Check':
        'Check that the content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.',
      '3_1_1_H57.2':
        'The html element should have a lang or xml:lang attribute which describes the language of the document.',
      '3_1_1_H57.3.Lang':
        'The language specified in the lang attribute of the document element does not appear to be well-formed.',
      '3_1_1_H57.3.XmlLang':
        'The language specified in the xml:lang attribute of the document element does not appear to be well-formed.',
      '3_1_2_H58':
        'Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.',
      '3_1_2_H58.1.Lang':
        'The language specified in the lang attribute of this element does not appear to be well-formed.',
      '3_1_2_H58.1.XmlLang':
        'The language specified in the xml:lang attribute of this element does not appear to be well-formed.',
      '3_1_3_H40,H54,H60,G62,G70':
        'Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
      '3_1_4_G102,G55,G62,H28,G97':
        'Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.',
      '3_1_5_G86,G103,G79,G153,G160':
        'Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.',
      '3_1_6_H62.1.HTML5':
        'Ruby element does not contain an rt element containing pronunciation information for its body text.',
      '3_1_6_H62.1.XHTML11':
        'Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.',
      '3_1_6_H62.2':
        'Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.',
      '3_2_1_G107':
        'Check that a change of context does not occur when this input field receives focus.',
      '3_2_2_H32.2':
        'This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.',
      '3_2_3_G61':
        'Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
      '3_2_4_G197':
        'Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.',
      '3_2_5_H83.3':
        "Check that this link's link text contains information indicating that the link will open in a new window.",
      '3_3_1_G83,G84,G85':
        'If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.',
      '3_3_2_G131,G89,G184,H90':
        'Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.',
      '3_3_3_G177':
        'Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.',
      '3_3_4_G98,G99,G155,G164,G168.LegalForms':
        'If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.',
      '3_3_5_G71,G184,G193':
        'Check that context-sensitive help is available for this form, at a Web-page and/or control level.',
      '3_3_6_G98,G99,G155,G164,G168.AllForms':
        'Check that submissions to this form are either reversible, checked for input errors, and/or confirmed by the user.',
      '4_1_1_F77': 'Duplicate id attribute value "{{id}}" found on the web page.',
      '4_1_2_H91.A.Empty':
        'Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.',
      '4_1_2_H91.A.EmptyWithName':
        'Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.',
      '4_1_2_H91.A.EmptyNoId':
        'Anchor element found with no link content and no name and/or ID attribute.',
      '4_1_2_H91.A.NoHref':
        'Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.',
      '4_1_2_H91.A.Placeholder':
        'Anchor element found with link content, but no href, ID or name attribute has been supplied.',
      '4_1_2_H91.A.NoContent':
        'Anchor element found with a valid href attribute, but no link content has been supplied.',
      '4_1_2_input_element': 'input element',
      '4_1_2_element_content': 'element content',
      '4_1_2_element': 'element',
      '4_1_2_msg_pattern':
        'This {{msgNodeType}} does not have a name available to an accessibility API. Valid names are: {{builtAttrs}}.',
      '4_1_2_msg_pattern_role_of_button':
        'This element has role of "button" but does not have a name available to an accessibility API. Valid names are: {{builtAttrs}}.',
      '4_1_2_msg_pattern2':
        'This {{msgNodeType}} does not have a value available to an accessibility API.',
      '4_1_2_msg_add_one': 'Add one by adding content to the element.',
      '4_1_2_msg_pattern3':
        'This {{msgNodeType}} does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.',
      '4_1_2_value_exposed_using_attribute':
        'A value is exposed using the {{requiredValue}} attribute.',
      '4_1_2_value_exposed_using_element':
        'A value is exposed using the {{requiredValue}} element.',
      '4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check':
        'Check that status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.',
    }),
    (_global.translation.fr = {
      'auditor_name': 'HTML_CodeSniffer par Squiz',
      'auditor_using_standard': 'Utilisation de la norme',
      'auditor_standards': 'Normes',
      'auditor_code_snippet': 'Bout de code',
      'auditor_close': 'Fermer',
      'auditor_select_types': 'Sélectionner les types de questions à inclure dans le rapport',
      'auditor_home': 'Accueil',
      'auditor_view_report': 'Voir le rapport',
      'auditor_report': 'Rapport',
      'auditor_back_to_report': 'Retour au rapport',
      'auditor_previous_issue': 'Problème précédent',
      'auditor_next_issue': 'Prochain problème',
      'auditor_issue': 'Problème',
      'auditor_of': 'de',
      'auditor_errors': 'Erreurs',
      'auditor_error': 'Erreur',
      'auditor_warnings': 'Attentions',
      'auditor_warning': 'Attention',
      'auditor_notices': 'Avis',
      'auditor_notice': 'Avis',
      'auditor_toggle_display_of': "Basculer l'affichage de",
      'auditor_messages': 'messages',
      'auditor_unable_to_point': "Impossible de pointer vers l'élément associé à ce problème.",
      'auditor_unable_to_point_entire':
        "Impossible d'attirer l'attention sur cette question, car elle concerne l'ensemble du document.",
      'auditor_unable_to_point_removed':
        'Impossible de pointer vers cet élément car il a été supprimé du document depuis que le rapport a été généré.',
      'auditor_unable_to_point_outside':
        "Impossible de pointer vers cet élément parce qu'il est situé à l'extérieur de l'élément de corps du document.",
      'auditor_unable_to_point_hidden':
        "Impossible de pointer vers cet élément parce qu'il est caché de la vue ou n'a pas de représentation visuelle.",
      'auditor_point_to_element': "Pointer vers l'élément",
      'auditor_unsupported_browser':
        "La fonctionnalité d'extrait de code n'est pas prise en charge dans ce navigateur.",
      'auditor_page': 'Page',
      'auditor_updated_to': 'HTML_CodeSniffer a été mis à jour en version',
      'auditor_view_the_changelog': 'Voir le journal des modifications',
      'auditor_success_criterion': 'Critère de réussite',
      'auditor_suggested_techniques': 'Techniques suggérées',
      'auditor_applies_entire_document': "Ceci s'applique à l'ensemble du document",
      '1_1_1_H30.2':
        "L'élément Img est le seul contenu du lien, mais il manque le texte alt. Le texte alternatif devrait décrire le but du lien.",
      '1_1_1_H67.1':
        "L'élément Img avec du texte alt vide doit avoir un attribut de titre absent ou vide.",
      '1_1_1_H67.2':
        "L'élément Img est marqué de sorte qu'il est ignoré par la technologie d'assistance.",
      '1_1_1_H37':
        "Élément Img auquel il manque un attribut alt. Utilisez l'attribut alt pour spécifier une alternative de texte court.",
      '1_1_1_G94.Image':
        "Assurez-vous que le texte alt de l'élément img sert aux mêmes fins et présente les mêmes informations que l'image.",
      '1_1_1_H36':
        "Le bouton de soumission d'image n'a pas de texte alternatif. Spécifiez une alternative de texte qui décrit la fonction du bouton, en utilisant l'attribut alt.",
      '1_1_1_G94.Button':
        "Assurez-vous que le texte alt du bouton de soumission d'image identifie le but du bouton.",
      '1_1_1_H24':
        'Élément de zone dans une carte-image sans attribut alt. Chaque élément de zone doit avoir une alternative textuelle qui décrit la fonction de la zone de la carte image.',
      '1_1_1_H24.2':
        "Assurez-vous que l'alternative textuelle de l'élément de zone sert le même but que la partie de l'image de la carte-image à laquelle il fait référence.",
      '1_1_1_G73,G74':
        "Si cette image ne peut être entièrement décrite dans un texte court, assurez-vous qu'un texte long est également disponible, comme dans le corps du texte ou par le biais d'un lien.",
      '1_1_1_H2.EG5':
        "L'élément Img à l'intérieur d'un lien ne doit pas utiliser de texte alt qui duplique le contenu textuel du lien.",
      '1_1_1_H2.EG4':
        "L'élément Img à l'intérieur d'un lien a du texte alt vide ou manquant lorsqu'un lien à côté contient du texte de lien. Pensez à combiner les liens.",
      '1_1_1_H2.EG3':
        "L'élément Img à l'intérieur d'un lien ne doit pas utiliser de texte alt qui duplique le contenu d'un lien texte à côté.",
      '1_1_1_H53,ARIA6':
        "Les éléments d'objet doivent contenir une alternative de texte après l'épuisement de toutes les autres alternatives.",
      '1_1_1_G94,G92.Object,ARIA6':
        'Vérifiez que des textes courts (et, le cas échéant, les longs) sont disponibles pour les contenus non textuels qui servent le même but et présentent la même information.',
      '1_1_1_H35.3':
        "Les éléments de l'applet doivent contenir une alternative textuelle dans le corps de l'élément, pour les navigateurs qui ne supportent pas l'élément applet.",
      '1_1_1_H35.2':
        "Les éléments de l'applet doivent contenir un attribut alt, afin de fournir une alternative textuelle aux navigateurs supportant l'élément mais incapables de charger l'applet.",
      '1_1_1_G94,G92.Applet':
        'Vérifiez que des textes courts (et, le cas échéant, les longs) sont disponibles pour les contenus non textuels qui servent le même but et présentent la même information.',
      '1_2_1_G158':
        "Si cet objet incorporé ne contient que de l'audio préenregistré et n'est pas fourni comme alternative pour le contenu textuel, vérifiez qu'une version texte alternative est disponible.",
      '1_2_1_G159,G166':
        "Si cet objet incorporé ne contient que de la vidéo préenregistrée et n'est pas fourni comme alternative au contenu textuel, vérifiez qu'une version texte alternative est disponible, ou qu'une piste audio est fournie qui présente des informations équivalentes.",
      '1_2_2_G87,G93':
        "Si cet objet incorporé contient un support synchronisé préenregistré et n'est pas fourni comme alternative pour le contenu textuel, vérifiez que les légendes sont fournies pour le contenu audio.",
      '1_2_3_G69,G78,G173,G8':
        "Si cet objet incorporé contient un support synchronisé préenregistré et n'est pas fourni comme alternative au contenu textuel, vérifiez qu'une description audio de sa vidéo et/ou une version textuelle alternative du contenu est fournie.",
      '1_2_4_G9,G87,G93':
        'Si cet objet incorporé contient des médias synchronisés, vérifiez que les légendes sont fournies pour le contenu audio en direct.',
      '1_2_5_G78,G173,G8':
        "Si cet objet incorporé contient un support synchronisé préenregistré, vérifiez qu'une description audio est fournie pour son contenu vidéo.",
      '1_2_6_G54,G81':
        "Si cet objet incorporé contient un support synchronisé préenregistré, vérifiez qu'une interprétation en langage des signes est fournie pour l'audio.",
      '1_2_7_G8':
        "Si cet objet incorporé contient des médias synchronisés, et si les pauses dans l'audio de premier plan ne suffisent pas pour permettre aux descriptions audio de transmettre le sens de la vidéo préenregistrée, vérifiez qu'une description audio étendue est fournie, soit par le biais d'un script ou d'une autre version.",
      '1_2_8_G69,G159':
        "Si cet objet incorporé contient un média synchronisé pré-enregistré ou un contenu vidéo uniquement, vérifiez qu'une version texte alternative du contenu est fournie.",
      '1_2_9_G150,G151,G157':
        "Si cet objet incorporé contient du contenu audio en direct, vérifiez qu'une version texte alternative du contenu est fournie.",
      '1_3_1_F92,ARIA4':
        'Le rôle de cet élément est "présentation" mais contient des éléments enfants avec une signification sémantique.',
      '1_3_1_H44.NonExistent':
        'L\'attribut "for" de cette étiquette contient un identifiant qui n\'existe pas dans le document.',
      '1_3_1_H44.NonExistentFragment':
        'L\'attribut "for" de cette étiquette contient un ID qui n\'existe pas dans le fragment de document.',
      '1_3_1_H44.NotFormControl':
        "L'attribut \"for\" de cette étiquette contient un ID pour un élément qui n'est pas un contrôle de formulaire. Assurez-vous d'avoir saisi l'ID correct pour l'élément prévu.",
      '1_3_1_H65':
        'Ce contrôle de formulaire a un attribut "title" qui est vide ou ne contient que des espaces. Il sera ignoré à des fins de test d\'étiquetage.',
      '1_3_1_ARIA6':
        'Ce contrôle de formulaire possède un attribut "aria-label" qui est vide ou ne contient que des espaces. Il sera ignoré à des fins de test d\'étiquetage.',
      '1_3_1_ARIA16,ARIA9':
        "Ce contrôle de formulaire contient un attribut aria-labelledby, mais il inclut un ID \"{{id}}\" qui n'existe pas sur un élément. L'attribut aria-labelledby sera ignoré à des fins de test d'étiquetage.",
      '1_3_1_F68.Hidden':
        "Ce champ de formulaire caché est étiqueté d'une manière ou d'une autre. Il ne devrait pas être nécessaire d'étiqueter un champ de formulaire caché.",
      '1_3_1_F68.HiddenAttr':
        "Ce champ de formulaire est destiné à être masqué (à l'aide de l'attribut \"caché\"), mais il est également étiqueté d'une manière ou d'une autre. Il ne devrait pas être nécessaire d'étiqueter un champ de formulaire caché.",
      '1_3_1_F68':
        'Ce champ du formulaire doit être étiqueté d\'une manière ou d\'une autre. Utilisez l\'élément d\'étiquette (avec un attribut "for" ou enroulé autour du champ du formulaire), ou les attributs "title", "aria-label" ou "aria-labelledby" selon le cas.',
      '1_3_1_H49.': 'Le balisage de présentation utilisé est devenu obsolète dans HTML5.',
      '1_3_1_H49.AlignAttr': 'Aligner les attributs.',
      '1_3_1_H49.Semantic':
        "Le balisage sémantique doit être utilisé pour marquer un texte accentué ou un texte spécial afin qu'il puisse être déterminé par programmation.",
      '1_3_1_H49.AlignAttr.Semantic':
        "Le balisage sémantique doit être utilisé pour marquer un texte accentué ou un texte spécial afin qu'il puisse être déterminé par programmation.",
      '1_3_1_H42':
        "Une balise d'en-tête doit être utilisée si ce contenu est destiné à servir d'en-tête.",
      '1_3_1_H63.3':
        'La cellule de table a un attribut de portée invalide. Les valeurs valides sont ligne, col, groupe de lignes, groupe de lignes ou groupe de colonnes.',
      '1_3_1_H63.2':
        "Les attributs Scope sur les éléments td qui servent de titres pour d'autres éléments sont obsolètes dans HTML5. Utilisez un th élément à la place.",
      '1_3_1_H43.ScopeAmbiguous':
        "Les attributs de portée sur ces éléments sont ambigus dans un tableau à niveaux multiples d'en-têtes. Utilisez plutôt l'attribut headers sur les éléments td.",
      '1_3_1_H43.IncorrectAttr':
        'L\'attribut d\'en-tête incorrect sur cet élément td. Attendue "{{expected}}" mais trouvée "{{actual}}".',
      '1_3_1_H43.HeadersRequired':
        "La relation entre les éléments td et leurs éléments associés n'est pas définie. Comme cette table a plusieurs niveaux de ces éléments, vous devez utiliser l'attribut headers sur les éléments td.",
      '1_3_1_H43.MissingHeaderIds':
        "Tous les éléments de cette table ne contiennent pas un attribut id. Ces cellules devraient contenir des ids de sorte qu'elles puissent être référencées par des éléments td attributs d'en-têtes.",
      '1_3_1_H43.MissingHeadersAttrs':
        "Tous les éléments td de cette table ne contiennent pas un attribut d'en-tête. Chaque attribut d'en-tête devrait énumérer les ids de tous les éléments associés à cette cellule.",
      '1_3_1_H43,H63':
        "La relation entre les éléments td et leurs éléments associés n'est pas définie. Utilisez soit l'attribut scope sur ces éléments, soit l'attribut headers sur les éléments td.",
      '1_3_1_H63.1':
        "Tous les éléments de ce tableau n'ont pas tous un attribut de portée. Ces cellules doivent contenir un attribut scope pour identifier leur association avec les éléments td.",
      '1_3_1_H73.3.LayoutTable':
        "Ce tableau semble être utilisé pour la mise en page, mais contient un attribut résumé. Les tableaux de présentation ne doivent pas contenir d'attributs sommaires ou, s'ils sont fournis, doivent être vides.",
      '1_3_1_H39,H73.4':
        "Si ce tableau est un tableau de données et qu'un attribut résumé et un élément de légende sont présents, le résumé ne doit pas dupliquer la légende.",
      '1_3_1_H73.3.Check':
        "Si ce tableau est un tableau de données, vérifiez que l'attribut summary décrit l'organisation du tableau ou explique comment utiliser le tableau.",
      '1_3_1_H73.3.NoSummary':
        "Si ce tableau est un tableau de données, envisagez d'utiliser l'attribut résumé de l'élément de tableau pour donner une vue d'ensemble de ce tableau.",
      '1_3_1_H39.3.LayoutTable':
        'Ce tableau semble être utilisé pour la mise en page, mais contient un élément de légende. Les tables de présentation ne doivent pas contenir de légendes.',
      '1_3_1_H39.3.Check':
        "Si ce tableau est un tableau de données, vérifiez que l'élément de légende décrit correctement ce tableau.",
      '1_3_1_H39.3.NoCaption':
        "Si ce tableau est un tableau de données, envisagez d'utiliser un élément de légende de l'élément de tableau pour identifier ce tableau.",
      '1_3_1_H71.NoLegend':
        "Fieldset ne contient pas d'élément de légende. Tous les champs doivent contenir un élément de légende décrivant la description du groupe de champs.",
      '1_3_1_H85.2':
        "Si cette liste de sélection contient des groupes d'options connexes, ils doivent être regroupés avec le groupe optgroup.",
      '1_3_1_H71.SameName':
        "Si ces boutons radio ou cases à cocher nécessitent une description plus détaillée au niveau du groupe, ils doivent être contenus dans un élément de l'ensemble des champs.",
      '1_3_1_H48.1':
        "Ce contenu semble simuler une liste non ordonnée à l'aide de texte brut. Si c'est le cas, marquer ce contenu avec un élément ul ajouterait une information de structure appropriée au document.",
      '1_3_1_H48.2':
        "Ce contenu semble simuler une liste ordonnée à l'aide de texte brut. Si c'est le cas, marquer ce contenu avec un élément ol ajouterait des informations de structure appropriées au document.",
      '1_3_1_G141_a':
        "La structure d'en-tête n'est pas imbriquée logiquement. Cet élément h{{{headingNum}} semble être l'en-tête du document primaire, donc devrait être un élément h1.",
      '1_3_1_G141_b':
        "La structure d'en-tête n'est pas imbriquée logiquement. Cet élément h{{{headingNum}} devrait être un h{properHeadingNum}} pour être correctement imbriqué.",
      '1_3_1_H42.2':
        "Étiquette d'en-tête trouvée sans contenu. Le texte qui n'est pas destiné à servir d'en-tête ne doit pas être marqué avec des balises d'en-tête.",
      '1_3_1_H48':
        'Si cet élément contient une section de navigation, il est recommandé de le marquer comme une liste.',
      '1_3_1_LayoutTable':
        "Ce tableau semble être un tableau de présentation. S'il s'agit plutôt d'un tableau de données, assurez-vous que les cellules d'en-tête sont identifiées à l'aide de ces éléments.",
      '1_3_1_DataTable':
        "Ce tableau semble être un tableau de données. S'il s'agit plutôt d'un tableau de présentation, assurez-vous qu'il n'y a pas d'éléments, ni de résumé ou de légende\".",
      '1_3_2_G57':
        "Vérifiez que le contenu est ordonné dans un ordre significatif lorsqu'il est linéarisé, par exemple lorsque les feuilles de style sont désactivées.",
      '1_3_3_G96':
        "Lorsque des instructions sont fournies pour comprendre le contenu, ne vous fiez pas uniquement aux caractéristiques sensorielles (telles que la forme, la taille ou l'emplacement) pour décrire les objets.",
      '1_4_1_G14,G18':
        "Vérifier que toute information véhiculée par la couleur seule est également disponible sous forme de texte ou d'autres repères visuels.",
      '1_4_2_F23':
        "Si cet élément contient de l'audio qui joue automatiquement pendant plus de 3 secondes, vérifiez qu'il est possible de mettre en pause, d'arrêter ou de couper le son.",
      '1_4_3_F24.BGColour':
        "Vérifiez que cet élément a une couleur d'avant-plan héritée pour compléter la couleur ou l'image d'arrière-plan en ligne correspondante.",
      '1_4_3_F24.FGColour':
        "Vérifiez que cet élément a une couleur ou une image d'arrière-plan héritée pour compléter la couleur d'avant-plan correspondante.",
      '1_4_3_G18_or_G145.Abs':
        "Cet élément est absolument positionné et la couleur de fond ne peut pas être déterminée. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'arrière-plan est d'au moins {{nécessaire}}:1.",
      '1_4_3_G18_or_G145.BgImage':
        "Le texte de cet élément est placé sur une image de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'image est d'au moins {{nécessaire}}:1.",
      '1_4_3_G18_or_G145.Alpha':
        "Le texte ou l'arrière-plan de cet élément contient de la transparence. Assurez-vous que le rapport de contraste entre le texte et l'arrière-plan est d'au moins {{nécessaire}}:1.",
      '1_4_3_G18_or_G145.Fail':
        "Cet élément a un contraste insuffisant à ce niveau de conformité. On s'attendait à un rapport de contraste d'au moins {{required}}:1, mais le texte dans cet élément a un rapport de contraste de {{value}}:1.",
      '1_4_3_G18_or_G145.Fail.Recomendation': 'Recommandation : ',
      '1_4_3_G18_or_G145.Fail.Recomendation.Text': 'changement Couleur du texte à {{value}}',
      '1_4_3_G18_or_G145.Fail.Recomendation.Background': 'changement Fond à {{value}}',
      '1_4_4_G142':
        "Vérifiez que le texte peut être redimensionné sans technologie d'assistance jusqu'à 200 pour cent sans perte de contenu ou de fonctionnalité.",
      '1_4_5_G140,C22,C30.AALevel':
        "Si les technologies utilisées permettent d'obtenir une présentation visuelle, vérifiez que le texte est utilisé pour transmettre des informations plutôt que des images de texte, sauf lorsque l'image du texte est essentielle à l'information véhiculée, ou peut être visuellement adaptée aux besoins de l'utilisateur.",
      '1_4_6_G18_or_G17.Abs':
        "Cet élément est absolument positionné et la couleur de fond ne peut pas être déterminée. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'arrière-plan est d'au moins {{nécessaire}}:1.",
      '1_4_6_G18_or_G17.BgImage':
        "Le texte de cet élément est placé sur une image de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'image est d'au moins {{nécessaire}}:1.",
      '1_4_6_G18_or_G17.Fail':
        "Cet élément a un contraste insuffisant à ce niveau de conformité. On s'attendait à un rapport de contraste d'au moins {{required}}:1, mais le texte dans cet élément a un rapport de contraste de {{value}}:1.",
      '1_4_6_G18_or_G17.Fail.Recomendation': 'Recommandation : ',
      '1_4_6_G18_or_G17.Fail.Recomendation.Text': 'changement Couleur du texte à {{value}}',
      '1_4_6_G18_or_G17.Fail.Recomendation.Background': 'changement Fond à {{value}}',
      '1_4_7_G56':
        'Pour le contenu audio préenregistré de cet élément qui est principalement de la parole (comme la narration), tout bruit de fond devrait être muet, ou être au moins 20 dB (ou environ 4 fois plus silencieux que le discours).',
      '1_4_8_G148,G156,G175':
        "Vérifiez qu'il existe un mécanisme permettant à l'utilisateur de sélectionner les couleurs d'avant-plan et d'arrière-plan pour les blocs de texte, soit par l'intermédiaire de la page Web ou du navigateur.",
      '1_4_8_H87,C20':
        "Vérifiez qu'il existe un mécanisme permettant de réduire la largeur d'un bloc de texte à un maximum de 80 caractères (ou 40 en caractères chinois, japonais ou coréen).",
      '1_4_8_C19,G172,G169':
        "Vérifiez que les blocs de texte ne sont pas entièrement justifiés - c'est-à-dire à gauche et à droite - ou qu'il existe un mécanisme pour supprimer toute justification.",
      '1_4_8_G188,C21':
        "Vérifiez que l'interligne dans les blocs de texte est d'au moins 150% dans les paragraphes et que l'interligne est d'au moins 1,5 fois l'interligne ou qu'il existe un mécanisme pour y parvenir.",
      '1_4_8_H87,G146,C26':
        "Vérifiez que le texte peut être redimensionné sans technologie d'assistance jusqu'à 200 pour cent sans que l'utilisateur ait besoin de faire défiler horizontalement sur une fenêtre plein écran.",
      '1_4_9_G140,C22,C30.NoException':
        "Vérifier que les images de texte ne sont utilisées qu'à des fins de décoration pure ou lorsqu'une présentation particulière du texte est essentielle à l'information véhiculée.",
      '2_1_1_G90':
        "S'assurer que la fonctionnalité fournie par un gestionnaire d'événements pour cet élément est disponible par l'intermédiaire du clavier.",
      '2_1_1_SCR20.DblClick':
        "Assurez-vous que la fonctionnalité fournie en double-cliquant sur cet élément est disponible par l'intermédiaire du clavier.",
      '2_1_1_SCR20.MouseOver':
        "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement focus.",
      '2_1_1_SCR20.MouseOut':
        "Assurez-vous que la fonctionnalité fournie par la souris hors de cet élément est disponible par le clavier ; par exemple, en utilisant l'événement flou.",
      '2_1_1_SCR20.MouseMove':
        "Assurez-vous que la fonctionnalité fournie en déplaçant la souris sur cet élément est disponible par l'intermédiaire du clavier.",
      '2_1_1_SCR20.MouseDown':
        "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement keydown.",
      '2_1_1_SCR20.MouseUp':
        "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement keyup.",
      '2_1_2_F10':
        "Vérifiez que cette applet ou plugin permet d'éloigner le focus de lui-même lors de l'utilisation du clavier.",
      '2_2_1_F40.2':
        "Meta refresh tag utilisé pour rediriger vers une autre page, avec une limite de temps qui n'est pas nulle. Les utilisateurs ne peuvent pas contrôler cette limite de temps.",
      '2_2_1_F41.2':
        'Meta refresh tag utilisé pour rafraîchir la page courante. Les utilisateurs ne peuvent pas contrôler la limite de temps pour ce rafraîchissement.',
      '2_2_2_SCR33,SCR22,G187,G152,G186,G191':
        "Si une partie du contenu bouge, défile ou clignote pendant plus de 5 secondes, ou se met à jour automatiquement, vérifiez qu'il existe un mécanisme permettant de mettre en pause, d'arrêter ou de cacher le contenu.",
      '2_2_2_F4':
        "S'assurer qu'il existe un mécanisme permettant d'arrêter cet élément clignotant en moins de cinq secondes.",
      '2_2_2_F47':
        "Les éléments clignotants ne peuvent pas satisfaire à l'exigence selon laquelle les informations clignotantes peuvent être arrêtées en moins de cinq secondes.",
      '2_2_3_G5':
        "Vérifier que le chronométrage n'est pas une partie essentielle de l'événement ou de l'activité présentée par le contenu, à l'exception des médias synchronisés non interactifs et des événements en temps réel.",
      '2_2_4_SCR14':
        "Vérifier que toutes les interruptions (y compris les mises à jour du contenu) peuvent être reportées ou supprimées par l'utilisateur, à l'exception des interruptions impliquant une situation d'urgence.",
      '2_2_5_G105,G181':
        "Si cette page Web fait partie d'un ensemble de pages Web avec une limite de temps d'inactivité, vérifiez qu'un utilisateur authentifié peut poursuivre l'activité sans perte de données après la ré-authentification.",
      '2_3_1_G19,G176':
        "Vérifier qu'aucun composant du contenu ne clignote plus de trois fois au cours d'une période d'une seconde ou que la taille de la zone de clignotement est suffisamment petite.",
      '2_3_2_G19':
        "Vérifiez qu'aucun composant du contenu ne clignote plus de trois fois au cours d'une période d'une seconde.",
      '2_4_1_H64.1':
        "L'élément Iframe nécessite un attribut de titre non vide qui identifie la trame.",
      '2_4_1_H64.2':
        "Vérifiez que l'attribut title de cet élément contient du texte qui identifie le cadre.",
      '2_4_1_G1,G123,G124,H69':
        "Veiller à ce que tous les éléments de navigation communs puissent être contournés ; par exemple, en utilisant des liens de saut, des éléments d'en-tête ou des rôles de repère ARIA.",
      '2_4_1_G1,G123,G124.NoSuchID':
        'Ce lien pointe vers une ancre nommée "{{id}}" dans le document, mais aucune ancre n\'existe avec ce nom.',
      '2_4_1_G1,G123,G124.NoSuchIDFragment':
        'Ce lien pointe vers une ancre nommée "{{id}}" dans le document, mais aucune ancre n\'existe avec ce nom dans le fragment testé.',
      '2_4_2_H25.1.NoHeadEl':
        "Il n'y a pas de section d'en-tête dans laquelle placer un élément de titre descriptif.",
      '2_4_2_H25.1.NoTitleEl':
        "Un titre devrait être fourni pour le document, en utilisant un élément de titre non vide dans la section d'en-tête.",
      '2_4_2_H25.1.EmptyTitle': "L'élément de titre de la section d'en-tête ne doit pas être vide.",
      '2_4_2_H25.2': "Vérifier que l'élément de titre décrit le document.",
      '2_4_3_H4.2':
        "Si tabindex est utilisé, vérifiez que l'ordre des onglets spécifié par les attributs de tabindex suit les relations dans le contenu.",
      '2_4_4_H77,H78,H79,H80,H81,H33':
        'Vérifiez que le texte du lien combiné avec le contexte du lien déterminé par le programme, ou son attribut de titre, identifie le but du lien.',
      '2_4_4_H77,H78,H79,H80,H81':
        'Vérifiez que le texte du lien combiné avec le contexte du lien déterminé par le programme identifie le but du lien.',
      '2_4_5_G125,G64,G63,G161,G126,G185':
        "Si cette page Web ne fait pas partie d'un processus linéaire, vérifiez qu'il existe plus d'une façon de localiser cette page Web dans un ensemble de pages Web.",
      '2_4_6_G130,G131':
        'Vérifiez que les en-têtes et les étiquettes décrivent le sujet ou le but.',
      '2_4_7_G149,G165,G195,C15,SCR31':
        "Vérifiez qu'il existe au moins un mode de fonctionnement dans lequel l'indicateur de mise au point du clavier peut être placé visuellement sur les commandes de l'interface utilisateur.",
      '2_4_8_H59.1':
        "Les éléments de lien ne peuvent être situés que dans la section d'en-tête du document.",
      '2_4_8_H59.2a':
        "Il manque à l'élément Link un attribut rel non vide identifiant le type de lien.",
      '2_4_8_H59.2b':
        "L'élément Link manque un attribut href non vide pointant vers la ressource liée.",
      '2_4_9_H30': "Vérifiez que le texte du lien décrit l'objet du lien.",
      '3_1_1_H57.2':
        "L'élément html doit avoir un attribut lang ou xml:lang qui décrit la langue du document.",
      '3_1_1_H57.3.Lang':
        "La langue spécifiée dans l'attribut lang de l'élément de document ne semble pas être bien formée.",
      '3_1_1_H57.3.XmlLang':
        "La langue spécifiée dans l'attribut xml:lang de l'élément document ne semble pas être bien formée.",
      '3_1_2_H58':
        "Assurez-vous que tout changement de langue est marqué à l'aide de l'attribut lang et/ou xml:lang sur un élément, selon le cas.",
      '3_1_2_H58.1.Lang':
        "La langue spécifiée dans l'attribut lang de cet élément ne semble pas être bien formée.",
      '3_1_2_H58.1.XmlLang':
        "Le langage spécifié dans l'attribut xml:lang de cet élément ne semble pas être bien formé.",
      '3_1_3_H40,H54,H60,G62,G70':
        "Vérifier qu'il existe un mécanisme permettant d'identifier des définitions spécifiques de mots ou de phrases utilisés d'une manière inhabituelle ou restreinte, y compris les expressions idiomatiques et le jargon.",
      '3_1_4_G102,G55,G62,H28,G97':
        "Vérifier qu'il existe un mécanisme permettant d'identifier la forme élargie ou la signification des abréviations.",
      '3_1_5_G86,G103,G79,G153,G160':
        "Lorsque le contenu exige une capacité de lecture plus avancée que le niveau de l'enseignement secondaire inférieur, un contenu supplémentaire ou une version alternative devrait être fourni.",
      '3_1_6_H62.1.HTML5':
        'Ruby element does not contain an rt element containing prononciation information for its body text.',
      '3_1_6_H62.1.XHTML11':
        'Ruby element does not contain an rt element containing prononciation information for the text inside the rb element.',
      '3_1_6_H62.2':
        'Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.',
      '3_2_1_G107':
        "Vérifier qu'il n'y a pas de changement de contexte lorsque ce champ de saisie reçoit le focus.",
      '3_2_2_H32.2':
        'Ce formulaire ne contient pas de bouton de soumission, ce qui crée des problèmes pour ceux qui ne peuvent pas soumettre le formulaire à l\'aide du clavier. Les boutons Submit sont des éléments INPUT avec l\'attribut de type "submit" ou "image", ou des éléments BUTTON avec le type "submit" ou omis/invalid.',
      '3_2_3_G61':
        "Vérifiez que les mécanismes de navigation qui sont répétés sur plusieurs pages Web se produisent dans le même ordre relatif chaque fois qu'ils sont répétés, à moins qu'un changement ne soit initié par l'utilisateur.",
      '3_2_4_G197':
        "Vérifier que les composants qui ont la même fonctionnalité dans cette page Web sont identifiés de manière cohérente dans l'ensemble des pages Web auxquelles ils appartiennent.",
      '3_2_5_H83.3':
        "Vérifiez que le texte du lien de ce lien contient des informations indiquant que le lien s'ouvrira dans une nouvelle fenêtre.",
      '3_3_1_G83,G84,G85':
        "Si une erreur de saisie est automatiquement détectée dans ce formulaire, vérifiez que le ou les éléments erronés sont identifiés et que l'erreur ou les erreurs sont décrites à l'utilisateur sous forme de texte.",
      '3_3_2_G131,G89,G184,H90':
        "Vérifier que les étiquettes descriptives ou les instructions (y compris pour les champs obligatoires) sont fournies pour l'entrée de l'utilisateur dans ce formulaire.",
      '3_3_3_G177':
        "Vérifier que ce formulaire fournit les corrections suggérées en cas d'erreurs dans les entrées des utilisateurs, à moins que cela ne compromette la sécurité ou l'objectif du contenu.",
      '3_3_4_G98,G99,G155,G164,G168.LegalForms':
        "Si ce formulaire lie un utilisateur à un engagement financier ou juridique, modifie/supprime des données contrôlables par l'utilisateur, ou soumet des réponses de test, assurez-vous que les soumissions sont réversibles, vérifiées pour les erreurs de saisie et/ou confirmées par l'utilisateur.",
      '3_3_5_G71,G184,G193':
        "Vérifiez que l'aide contextuelle est disponible pour ce formulaire, au niveau de la page Web et/ou du contrôle.",
      '3_3_6_G98,G99,G155,G164,G168.AllForms':
        "Vérifier que les soumissions à ce formulaire sont soit réversibles, soit vérifiées pour les erreurs de saisie, et/ou confirmées par l'utilisateur.",
      '4_1_1_F77': 'Dupliquer la valeur de l\'attribut id "{{id}}" trouvée sur la page web.',
      '4_1_2_H91.A.Empty':
        "L'élément d'ancrage trouvé avec un ID mais sans href ou texte de lien. Envisager de déplacer son ID vers un élément parent ou un élément voisin.",
      '4_1_2_H91.A.EmptyWithName':
        "L'élément d'ancrage trouvé avec un attribut de nom mais sans href ou texte de lien. Envisagez de déplacer l'attribut de nom pour qu'il devienne l'ID d'un parent ou d'un élément voisin.",
      '4_1_2_H91.A.EmptyNoId':
        "Élément d'ancrage trouvé sans contenu de lien et sans nom et/ou attribut ID.",
      '4_1_2_H91.A.NoHref':
        "Les éléments d'ancrage ne doivent pas être utilisés pour définir des cibles de liens en page. Si vous n'utilisez pas l'ID à d'autres fins (comme le CSS ou le script), envisagez de le déplacer vers un élément parent",
      '4_1_2_H91.A.Placeholder':
        "L'élément d'ancrage trouvé avec le contenu du lien, mais aucun attribut href, ID ou nom n'a été fourni.",
      '4_1_2_H91.A.NoContent':
        "L'élément d'ancrage trouvé avec un attribut href valide, mais aucun contenu de lien n'a été fourni.",
      '4_1_2_input_element': "élément d'entrée",
      '4_1_2_element_content': "contenu de l'élément",
      '4_1_2_element': 'élément',
      '4_1_2_msg_pattern':
        "Ce {{msgNodeType}} n'a pas de nom disponible pour une API d'accessibilité. Les noms valides le sont : {{builtAttrs}}.",
      '4_1_2_msg_pattern_role_of_button':
        "Ce l'élément a un rôle de \"bouton\" mais n'a pas de nom disponible pour une API d'accessibilité. Les noms valides le sont : {{builtAttrs}}.",
      '4_1_2_msg_pattern2':
        "Cette {{{msgNodeType}} n'a pas de valeur disponible pour une API d'accessibilité.",
      '4_1_2_msg_add_one': "Ajouter un en ajoutant du contenu à l'élément.",
      '4_1_2_msg_pattern3':
        "Cette {{msgNodeType}} n'a pas d'option initialement sélectionnée. Selon votre version HTML, la valeur exposée à une API d'accessibilité peut être indéfinie.",
      '4_1_2_value_exposed_using_attribute':
        "Une valeur est exposée à l'aide de l'attribut {{requiredValue}}.",
      '4_1_2_value_exposed_using_element':
        "Une valeur est exposée à l'aide de l'élément {{requiredValue}}.",
    }),
    (_global.translation.it = {
      'auditor_name': 'HTML_CodeSniffer di Squiz',
      'auditor_using_standard': 'Standard in uso: ',
      'auditor_standards': 'Standard',
      'auditor_code_snippet': 'Codice coinvolto',
      'auditor_close': 'Chiudi',
      'auditor_select_types': 'Seleziona il tipo di verifiche da includere nel report',
      'auditor_home': 'Inizio',
      'auditor_view_report': 'Risultati del report',
      'auditor_report': 'Report',
      'auditor_back_to_report': 'Torna al report',
      'auditor_previous_issue': 'Problema Precedente',
      'auditor_next_issue': 'Problema Successivo',
      'auditor_issue': 'Problema',
      'auditor_of': 'di',
      'auditor_errors': 'Errori',
      'auditor_error': 'Errore',
      'auditor_warnings': 'Avvisi',
      'auditor_warning': 'Avviso',
      'auditor_notices': 'Note',
      'auditor_notice': 'Nota',
      'auditor_toggle_display_of': 'Visibilità di',
      'auditor_messages': 'messaggi',
      'auditor_unable_to_point': 'Unable to point to the element associated with this issue.',
      'auditor_unable_to_point_entire':
        'Unable to point to this issue, as it relates to the entire document.',
      'auditor_unable_to_point_removed':
        'Unable to point to this element as it has been removed from the document since the report was generated.',
      'auditor_unable_to_point_outside':
        "Unable to point to this element because it is located outside the document's body element.",
      'auditor_unable_to_point_hidden':
        'Unable to point to this element because it is hidden from view, or does not have a visual representation.',
      'auditor_point_to_element': 'Point to Element',
      'auditor_unsupported_browser':
        'La funzionalità «parte di codice» non funziona su questo browser.',
      'auditor_page': 'Pagina',
      'auditor_updated_to': 'Abbiamo aggiornato HTML_CodeSniffer alla versione',
      'auditor_view_the_changelog': 'Elenco delle modifiche',
      'auditor_success_criterion': 'Requisito di successo',
      'auditor_suggested_techniques': 'Tecniche suggerite',
      'auditor_applies_entire_document': 'Si applica a tutto il documento',
      '1_1_1_H30.2':
        'Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.',
      '1_1_1_H67.1': 'Img element with empty alt text must have absent or empty title attribute.',
      '1_1_1_H67.2': 'Img element is marked so that it is ignored by Assistive Technology.',
      '1_1_1_H37':
        'Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.',
      '1_1_1_G94.Image':
        "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
      '1_1_1_H36':
        "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
      '1_1_1_G94.Button':
        "Ensure that the image submit button's alt text identifies the purpose of the button.",
      '1_1_1_H24':
        'Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.',
      '1_1_1_H24.2':
        "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
      '1_1_1_G73,G74':
        'If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.',
      '1_1_1_H2.EG5':
        'Img element inside a link must not use alt text that duplicates the text content of the link.',
      '1_1_1_H2.EG4':
        'Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.',
      '1_1_1_H2.EG3':
        'Img element inside a link must not use alt text that duplicates the content of a text link beside it.',
      '1_1_1_H53,ARIA6':
        'Object elements must contain a text alternative after all other alternatives are exhausted.',
      '1_1_1_G94,G92.Object,ARIA6':
        'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.',
      '1_1_1_H35.3':
        "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
      '1_1_1_H35.2':
        'Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.',
      '1_1_1_G94,G92.Applet':
        'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.',
      '1_2_1_G158':
        'If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.',
      '1_2_1_G159,G166':
        'If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.',
      '1_2_2_G87,G93':
        'If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.',
      '1_2_3_G69,G78,G173,G8':
        'If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.',
      '1_2_4_G9,G87,G93':
        'If this embedded object contains synchronised media, check that captions are provided for live audio content.',
      '1_2_5_G78,G173,G8':
        'If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.',
      '1_2_6_G54,G81':
        'If this embedded object contains pre-recorded synchronised media, check that a sign language interpretation is provided for its audio.',
      '1_2_7_G8':
        'If this embedded object contains synchronised media, and where pauses in foreground audio is not sufficient to allow audio descriptions to convey the sense of pre-recorded video, check that an extended audio description is provided, either through scripting or an alternate version.',
      '1_2_8_G69,G159':
        'If this embedded object contains pre-recorded synchronised media or video-only content, check that an alternative text version of the content is provided.',
      '1_2_9_G150,G151,G157':
        'If this embedded object contains live audio-only content, check that an alternative text version of the content is provided.',
      '1_3_1_F92,ARIA4':
        'This element\'s role is "presentation" but contains child elements with semantic meaning.',
      '1_3_1_H44.NonExistent':
        'This label\'s "for" attribute contains an ID that does not exist in the document.',
      '1_3_1_H44.NonExistentFragment':
        'This label\'s "for" attribute contains an ID that does not exist in the document fragment.',
      '1_3_1_H44.NotFormControl':
        'This label\'s "for" attribute contains an ID for an element that is not a form control. Ensure that you have entered the correct ID for the intended element.',
      '1_3_1_H65':
        'This form control has a "title" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
      '1_3_1_ARIA6':
        'This form control has an "aria-label" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
      '1_3_1_ARIA16,ARIA9':
        'This form control contains an aria-labelledby attribute, however it includes an ID "{{id}}" that does not exist on an element. The aria-labelledby attribute will be ignored for labelling test purposes.',
      '1_3_1_F68.Hidden':
        'This hidden form field is labelled in some way. There should be no need to label a hidden form field.',
      '1_3_1_F68.HiddenAttr':
        'This form field is intended to be hidden (using the "hidden" attribute), but is also labelled in some way. There should be no need to label a hidden form field.',
      '1_3_1_F68':
        'This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.',
      '1_3_1_H49.': 'Presentational markup used that has become obsolete in HTML5.',
      '1_3_1_H49.AlignAttr': 'Align attributes.',
      '1_3_1_H49.Semantic':
        'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.',
      '1_3_1_H49.AlignAttr.Semantic':
        'Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.',
      '1_3_1_H42': 'Heading markup should be used if this content is intended as a heading.',
      '1_3_1_H63.3':
        'Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.',
      '1_3_1_H63.2':
        'Scope attributes on td elements that act as headings for other elements are obsolete in HTML5. Use a th element instead.',
      '1_3_1_H43.ScopeAmbiguous':
        'Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.',
      '1_3_1_H43.IncorrectAttr':
        'Incorrect headers attribute on this td element. Expected "{{expected}}" but found "{{actual}}"',
      '1_3_1_H43.HeadersRequired':
        'The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.',
      '1_3_1_H43.MissingHeaderIds':
        "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
      '1_3_1_H43.MissingHeadersAttrs':
        'Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.',
      '1_3_1_H43,H63':
        'The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.',
      '1_3_1_H63.1':
        'Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.',
      '1_3_1_H73.3.LayoutTable':
        'This table appears to be used for layout, but contains a summary attribute. Layout tables must not contain summary attributes, or if supplied, must be empty.',
      '1_3_1_H39,H73.4':
        'If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.',
      '1_3_1_H73.3.Check':
        "If this table is a data table, check that the summary attribute describes the table's organization or explains how to use the table.",
      '1_3_1_H73.3.NoSummary':
        'If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.',
      '1_3_1_H39.3.LayoutTable':
        'This table appears to be used for layout, but contains a caption element. Layout tables must not contain captions.',
      '1_3_1_H39.3.Check':
        'If this table is a data table, check that the caption element accurately describes this table.',
      '1_3_1_H39.3.NoCaption':
        'If this table is a data table, consider using a caption element to the table element to identify this table.',
      '1_3_1_H71.NoLegend':
        'Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.',
      '1_3_1_H85.2':
        'If this selection list contains groups of related options, they should be grouped with optgroup.',
      '1_3_1_H71.SameName':
        'If these radio buttons or check boxes require a further group-level description, they should be contained within a fieldset element.',
      '1_3_1_H48.1':
        'This content looks like it is simulating an unordered list using plain text. If so, marking up this content with a ul element would add proper structure information to the document.',
      '1_3_1_H48.2':
        'This content looks like it is simulating an ordered list using plain text. If so, marking up this content with an ol element would add proper structure information to the document.',
      '1_3_1_G141_a':
        'The heading structure is not logically nested. This h{{headingNum}} element appears to be the primary document heading, so should be an h1 element.',
      '1_3_1_G141_b':
        'The heading structure is not logically nested. This h{{headingNum}} element should be an h{{properHeadingNum}} to be properly nested.',
      '1_3_1_H42.2':
        'Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.',
      '1_3_1_H48':
        'If this element contains a navigation section, it is recommended that it be marked up as a list.',
      '1_3_1_LayoutTable':
        'This table appears to be a layout table. If it is meant to instead be a data table, ensure header cells are identified using th elements.',
      '1_3_1_DataTable':
        'This table appears to be a data table. If it is meant to instead be a layout table, ensure there are no th elements, and no summary or caption.',
      '1_3_2_G57':
        'Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.',
      '1_3_3_G96':
        'Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.',
      '1_4_1_G14,G18':
        'Check that any information conveyed using colour alone is also available in text, or through other visual cues.',
      '1_4_2_F23':
        'If this element contains audio that plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.',
      '1_4_3_F24.BGColour':
        'Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.',
      '1_4_3_F24.FGColour':
        'Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.',
      '1_4_3_G18_or_G145.Abs':
        'This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.',
      '1_4_3_G18_or_G145.BgImage':
        "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
      '1_4_3_G18_or_G145.Alpha':
        "This element's text or background contains transparency. Ensure the contrast ratio between the text and background are at least {{required}}:1.",
      '1_4_3_G18_or_G145.Fail':
        'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.',
      '1_4_3_G18_or_G145.Fail.Recomendation': 'Recommendation: change',
      '1_4_3_G18_or_G145.Fail.Recomendation.Text': 'text colour to',
      '1_4_3_G18_or_G145.Fail.Recomendation.Background': 'background to',
      '1_4_4_G142':
        'Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
      '1_4_5_G140,C22,C30.AALevel':
        "If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user's requirements.",
      '1_4_6_G18_or_G17.Abs':
        'This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.',
      '1_4_6_G18_or_G17.BgImage':
        "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
      '1_4_6_G18_or_G17.Fail':
        'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.',
      '1_4_6_G18_or_G17.Fail.Recomendation': 'Recommendation: change',
      '1_4_6_G18_or_G17.Fail.Recomendation.Text': 'text colour to',
      '1_4_6_G18_or_G17.Fail.Recomendation.Background': 'background to',
      '1_4_7_G56':
        'For pre-recorded audio-only content in this element that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.',
      '1_4_8_G148,G156,G175':
        'Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.',
      '1_4_8_H87,C20':
        'Check that a mechanism exists to reduce the width of a block of text to no more than 80 characters (or 40 in Chinese, Japanese or Korean script).',
      '1_4_8_C19,G172,G169':
        'Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.',
      '1_4_8_G188,C21':
        'Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.',
      '1_4_8_H87,G146,C26':
        'Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.',
      '1_4_9_G140,C22,C30.NoException':
        'Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.',
      '2_1_1_G90':
        'Ensure the functionality provided by an event handler for this element is available through the keyboard',
      '2_1_1_SCR20.DblClick':
        'Ensure the functionality provided by double-clicking on this element is available through the keyboard.',
      '2_1_1_SCR20.MouseOver':
        'Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.',
      '2_1_1_SCR20.MouseOut':
        'Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.',
      '2_1_1_SCR20.MouseMove':
        'Ensure the functionality provided by moving the mouse on this element is available through the keyboard.',
      '2_1_1_SCR20.MouseDown':
        'Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.',
      '2_1_1_SCR20.MouseUp':
        'Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.',
      '2_1_2_F10':
        'Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.',
      '2_2_1_F40.2':
        'Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.',
      '2_2_1_F41.2':
        'Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.',
      '2_2_2_SCR33,SCR22,G187,G152,G186,G191':
        'If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.',
      '2_2_2_F4':
        'Ensure there is a mechanism available to stop this blinking element in less than five seconds.',
      '2_2_2_F47':
        'Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.',
      '2_2_3_G5':
        'Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.',
      '2_2_4_SCR14':
        'Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.',
      '2_2_5_G105,G181':
        'If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.',
      '2_3_1_G19,G176':
        'Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.',
      '2_3_2_G19':
        'Check that no component of the content flashes more than three times in any 1-second period.',
      '2_4_1_H64.1':
        'Iframe element requires a non-empty title attribute that identifies the frame.',
      '2_4_1_H64.2':
        'Check that the title attribute of this element contains text that identifies the frame.',
      '2_4_1_G1,G123,G124,H69':
        'Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.',
      '2_4_1_G1,G123,G124.NoSuchID':
        'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name.',
      '2_4_1_G1,G123,G124.NoSuchIDFragment':
        'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name in the fragment tested.',
      '2_4_2_H25.1.NoHeadEl':
        'There is no head section in which to place a descriptive title element.',
      '2_4_2_H25.1.NoTitleEl':
        'A title should be provided for the document, using a non-empty title element in the head section.',
      '2_4_2_H25.1.EmptyTitle': 'The title element in the head section should be non-empty.',
      '2_4_2_H25.2': 'Check that the title element describes the document.',
      '2_4_3_H4.2':
        'If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.',
      '2_4_4_H77,H78,H79,H80,H81,H33':
        'Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.',
      '2_4_4_H77,H78,H79,H80,H81':
        'Check that the link text combined with programmatically determined link context identifies the purpose of the link.',
      '2_4_5_G125,G64,G63,G161,G126,G185':
        'If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.',
      '2_4_6_G130,G131': 'Check that headings and labels describe topic or purpose.',
      '2_4_7_G149,G165,G195,C15,SCR31':
        'Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.',
      '2_4_8_H59.1': 'Link elements can only be located in the head section of the document.',
      '2_4_8_H59.2a':
        'Link element is missing a non-empty rel attribute identifying the link type.',
      '2_4_8_H59.2b':
        'Link element is missing a non-empty href attribute pointing to the resource being linked.',
      '2_4_9_H30': 'Check that text of the link describes the purpose of the link.',
      '3_1_1_H57.2':
        'The html element should have a lang or xml:lang attribute which describes the language of the document.',
      '3_1_1_H57.3.Lang':
        'The language specified in the lang attribute of the document element does not appear to be well-formed.',
      '3_1_1_H57.3.XmlLang':
        'The language specified in the xml:lang attribute of the document element does not appear to be well-formed.',
      '3_1_2_H58':
        'Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.',
      '3_1_2_H58.1.Lang':
        'The language specified in the lang attribute of this element does not appear to be well-formed.',
      '3_1_2_H58.1.XmlLang':
        'The language specified in the xml:lang attribute of this element does not appear to be well-formed.',
      '3_1_3_H40,H54,H60,G62,G70':
        'Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
      '3_1_4_G102,G55,G62,H28,G97':
        'Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.',
      '3_1_5_G86,G103,G79,G153,G160':
        'Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.',
      '3_1_6_H62.1.HTML5':
        'Ruby element does not contain an rt element containing pronunciation information for its body text.',
      '3_1_6_H62.1.XHTML11':
        'Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.',
      '3_1_6_H62.2':
        'Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.',
      '3_2_1_G107':
        'Check that a change of context does not occur when this input field receives focus.',
      '3_2_2_H32.2':
        'This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.',
      '3_2_3_G61':
        'Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
      '3_2_4_G197':
        'Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.',
      '3_2_5_H83.3':
        "Check that this link's link text contains information indicating that the link will open in a new window.",
      '3_3_1_G83,G84,G85':
        'If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.',
      '3_3_2_G131,G89,G184,H90':
        'Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.',
      '3_3_3_G177':
        'Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.',
      '3_3_4_G98,G99,G155,G164,G168.LegalForms':
        'If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.',
      '3_3_5_G71,G184,G193':
        'Check that context-sensitive help is available for this form, at a Web-page and/or control level.',
      '3_3_6_G98,G99,G155,G164,G168.AllForms':
        'Check that submissions to this form are either reversible, checked for input errors, and/or confirmed by the user.',
      '4_1_1_F77': 'Duplicate id attribute value "{{id}}" found on the web page.',
      '4_1_2_H91.A.Empty':
        'Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.',
      '4_1_2_H91.A.EmptyWithName':
        'Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.',
      '4_1_2_H91.A.EmptyNoId':
        'Anchor element found with no link content and no name and/or ID attribute.',
      '4_1_2_H91.A.NoHref':
        'Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.',
      '4_1_2_H91.A.Placeholder':
        'Anchor element found with link content, but no href, ID or name attribute has been supplied.',
      '4_1_2_H91.A.NoContent':
        'Anchor element found with a valid href attribute, but no link content has been supplied.',
      '4_1_2_input_element': 'input element',
      '4_1_2_role_of_button': 'element has a role of "button" but',
      '4_1_2_element_content': 'element content',
      '4_1_2_element': 'element',
      '4_1_2_msg_pattern':
        'This {{msgNodeType}} does not have a name available to an accessibility API. Valid names are: {{builtAttrs}}.',
      '4_1_2_msg_pattern2':
        'This {{msgNodeType}} does not have a value available to an accessibility API.',
      '4_1_2_msg_add_one': 'Add one by adding content to the element.',
      '4_1_2_msg_pattern3':
        'This {{msgNodeType}} does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.',
      '4_1_2_value_exposed_using_attribute':
        'A value is exposed using the {{requiredValue}} attribute.',
      '4_1_2_value_exposed_using_element':
        'A value is exposed using the {{requiredValue}} element.',
    }),
    (_global.translation.ja = {
      'auditor_name': 'HTML_CodeSniffer',
      'auditor_using_standard': 'Using standard',
      'auditor_standards': '適合レベル',
      'auditor_code_snippet': 'コードスニペット',
      'auditor_close': '閉じる',
      'auditor_select_types': 'レポートに含める報告の種類を選択してください',
      'auditor_home': 'ホーム',
      'auditor_view_report': 'レポートをみる',
      'auditor_report': 'レポート',
      'auditor_back_to_report': 'レポートに戻る',
      'auditor_previous_issue': '前の報告',
      'auditor_next_issue': '次の報告',
      'auditor_issue': '報告',
      'auditor_of': '/',
      'auditor_errors': 'エラー',
      'auditor_error': 'エラー',
      'auditor_warnings': '警告',
      'auditor_warning': '警告',
      'auditor_notices': '通知',
      'auditor_notice': '通知',
      'auditor_toggle_display_of': 'Toggle display of',
      'auditor_messages': 'メッセージ',
      'auditor_unable_to_point': 'この報告に関係する要素の位置を特定できません。',
      'auditor_unable_to_point_entire':
        'この報告はドキュメント全体に関係するため、問題の位置を特定できません。',
      'auditor_unable_to_point_removed':
        'この要素はレポート作成後に削除されたため、要素の位置を特定できません。',
      'auditor_unable_to_point_outside':
        'この要素はドキュメントボディの外に位置するため、要素の位置を特定できません。',
      'auditor_unable_to_point_hidden':
        'この要素はビューから隠れているか、視覚表現をもたないため、要素の位置を特定できません。',
      'auditor_point_to_element': '要素の位置を特定',
      'auditor_unsupported_browser':
        'このコードスニペットの機能は、このブラウザでサポートされていません。',
      'auditor_page': 'ページ',
      'auditor_updated_to': 'HTML_CodeSniffer のバージョンがアップデートされました',
      'auditor_view_the_changelog': '更新履歴をみる',
      'auditor_success_criterion': '成功基準',
      'auditor_suggested_techniques': '推奨される手法',
      'auditor_applies_entire_document': 'これはドキュメント全体に適用されます',
      '1_1_1_H30.2':
        'img 要素がこのリンクの唯一のコンテンツですが、 alt テキストがありません。 alt テキストがリンクの目的を説明するべきです。',
      '1_1_1_H67.1':
        '空の alt テキストをもつ img 要素は title 属性をもたないか、または、空でなければなりません。',
      '1_1_1_H67.2': 'img 要素は支援技術に無視されるようマークアップされています。',
      '1_1_1_H37':
        'Img 要素に alt 属性が不足しています。 alt 属性で短い代替テキストを明示してください。',
      '1_1_1_G94.Image':
        'img 要素 の alt テキストが、この画像と同じ目的や情報を提供していることを確認してください。',
      '1_1_1_H36':
        '画像による送信ボタンに alt 属性が不足しています。このボタンの機能を説明する代替テキストを alt 属性で明示してください。',
      '1_1_1_G94.Button':
        '画像による送信ボタンの代替テキストがそのボタンの目的を特定していることを確認してください。',
      '1_1_1_H24':
        'イメージマップのArea 要素に alt 属性が不足しています。各 area 要素は、そのイメージマップエリアの機能を説明する代替テキストを持たなければなりません。',
      '1_1_1_H24.2':
        'area 要素の代替テキストが、参照するイメージマップ画像の部分と同じ目的を提供していることを確認してください。',
      '1_1_1_G73,G74':
        'もし短い代替テキストでこのイメージが十分に説明できないなら、ボディテキストやリンクなどを通じて長い代替テキストを提供してください。',
      '1_1_1_H2.EG5':
        'リンク内の img 要素は 代替テキストにリンクのコンテンツのテキストの複製を使用してはなりません。',
      '1_1_1_H2.EG4':
        'テキストリンクと隣り合うリンク内の img 要素の alt 属性が指定されていないか空になっています。テキストと画像のリンクを一つにまとめることを検討してください。',
      '1_1_1_H2.EG3':
        'テキストリンクと隣り合うリンク内の img 要素の alt 属性にテキストリンクの内容の複製を使用してはいけません。',
      '1_1_1_H53,ARIA6':
        '他のすべての選択肢が尽きた後は、 object 要素に代替テキストを含める必要があります。',
      '1_1_1_G94,G92.Object,ARIA6':
        '短い（適切な場合は長い）代替テキストが、同じ目的を果たし同じ情報を提示する非テキストコンテンツに対して提供されていることを確認してください。',
      '1_1_1_H35.3':
        'applet 要素をサポートしていないブラウザでは、 applet 要素の要素本文に代替テキストを含める必要があります。',
      '1_1_1_H35.2':
        'applet 要素をサポートしているがロードできないブラウザに対して代替テキストを提供するために、 applet 要素は alt 属性を含まなければなりません。',
      '1_1_1_G94,G92.Applet':
        '非テキストコンテンツに対して、同じ目的を果たし、かつ同じ情報を示す短い（適切な場合は長い）代替テキストが提供されていることを確認してください。',
      '1_2_1_G158':
        'この埋め込みオブジェクトに録音済みの音声のみが含まれていて、テキストコンテンツの代替として提供されていない場合は、代替テキストバージョンが利用可能であることを確認してください。',
      '1_2_1_G159,G166':
        'この埋め込みオブジェクトに録画済みの映像のみが含まれており、テキストコンテンツの代替として提供されていない場合は、代替テキストバージョンが利用可能であるか、同等の情報を示す音声トラックが提供されていることを確認してください。',
      '1_2_2_G87,G93':
        'この埋め込みオブジェクトに事前に記録された同期したメディアが含まれており、テキストコンテンツの代替として提供されていない場合は、音声コンテンツ用のキャプションが提供されていることを確認してください',
      '1_2_3_G69,G78,G173,G8':
        'この埋め込みオブジェクトに事前に記録された同期したメディアが含まれていて、テキストコンテンツの代替として提供されていない場合は、その映像の音声説明および/またはコンテンツの代替テキストバージョンが提供されていることを確認してください。',
      '1_2_4_G9,G87,G93':
        'この埋め込みオブジェクトに同期したメディアが含まれている場合は、ライブの音声コンテンツにキャプションが提供されていることを確認してください。',
      '1_2_5_G78,G173,G8':
        'この埋め込みオブジェクトに事前に記録された同期したメディアが含まれている場合は、その映像コンテンツに音声の説明があることを確認してください。',
      '1_2_6_G54,G81':
        'この埋め込みオブジェクトに記録済みの同期したメディアが含まれている場合は、その音声に手話の解釈が提供されていることを確認してください。',
      '1_2_7_G8':
        'この埋め込みオブジェクトに同期したメディアが含まれていて、前景音の一時停止による音声解説が収録済映像の意味を伝えるのに不十分な場合、スクリプトまたは代替バージョンで拡張音声解説が提供させていることを確認してください。',
      '1_2_8_G69,G159':
        'この埋め込みオブジェクトに事前に記録された同期したメディアまたは映像のみのコンテンツが含まれている場合は、コンテンツの代替テキストバージョンが提供されていることを確認してください。',
      '1_2_9_G150,G151,G157':
        'この埋め込みオブジェクトにライブの音声のみのコンテンツが含まれている場合は、そのコンテンツの代替テキストバージョンが提供されていることを確認してください。',
      '1_3_1_F92,ARIA4':
        'この要素の役割は"プレゼンテーション"ですが、セマンティックな意味を持つ子要素を含みます。',
      '1_3_1_H44.NonExistent':
        'このラベルの "for" 属性に、ドキュメントに存在しない ID が含まれています。',
      '1_3_1_H44.NonExistentFragment':
        'このラベルの "for" 属性に、ドキュメントフラグメントに存在しない ID が含まれています。',
      '1_3_1_H44.NotFormControl':
        'このラベルの "for" 属性には、フォームコントロールでない要素の ID が含まれています。目的の要素に正しい ID を入力していることを確認してください。',
      '1_3_1_H65':
        'このフォームコントロールには、空またはスペースのみを含む "title" 属性があります。ラベリングテストの目的では無視されます。',
      '1_3_1_ARIA6':
        'このフォームコントロールには、空またはスペースのみを含む "aria-label" 属性があります。ラベリングテストの目的では無視されます。',
      '1_3_1_ARIA16,ARIA9':
        'このフォームコントロールには aria-labelledby 属性が含まれていますが、要素には存在しないID "{{id}}" が含まれています。 aria-labelledby 属性はラベリングテストの目的では無視されます。',
      '1_3_1_F68.Hidden':
        'この hidden のフォームフィールドには何らかの方法でラベルが付けられています。 hidden のフォームフィールドにラベルを付ける必要はありません。',
      '1_3_1_F68.HiddenAttr':
        'このフォームフィールドは（ "hidden" 属性を使用して）非表示にすることを目的としていますが、何らかの方法でラベル付けされています。隠しフォームフィールドにラベルを付ける必要はありません。',
      '1_3_1_F68':
        'このフォームフィールドは何らかの方法でラベル付けされるべきです。 label 要素（ "for" 属性を持つかフォームフィールドを囲む）、または "title"、 "aria-label" 、または "aria-labelledby" 属性を適切に使用してください。',
      '1_3_1_H49.':
        'HTML5では時代遅れになっているプレゼンテーションマークアップが使用されています。',
      '1_3_1_H49.AlignAttr': '属性を揃えます',
      '1_3_1_H49.Semantic':
        '強調テキストまたは特殊テキストには、プログラム的に決定できるようセマンティックマークアップが使用されるべきです。',
      '1_3_1_H49.AlignAttr.Semantic':
        '強調テキストまたは特殊テキストには、プログラム的に決定できるようセマンティックマークアップが使用されるべきです。',
      '1_3_1_H42':
        'このコンテンツが見出しとして意図されている場合は、見出しマークアップを使用する必要があります。',
      '1_3_1_H63.3':
        'テーブルセルに無効な scope 属性があります。有効な値は、 row 、 col 、 rowgroup 、または colgroup です。',
      '1_3_1_H63.2':
        '他の要素の見出しとして機能する td 要素のスコープ属性は、HTML5では廃止されました。代わりに th 要素を使用してください。',
      '1_3_1_H43.ScopeAmbiguous':
        '複数のレベルの見出しを持つテーブルでは、 th 要素のスコープ属性はあいまいです。代わりに td 要素の headers 属性を使用してください。',
      '1_3_1_H43.IncorrectAttr':
        'この td 要素のヘッダー属性が正しくありません。 "{{expected}}" を予期していましたが、 "{{actual}}" を検出しました',
      '1_3_1_H43.HeadersRequired':
        'td 要素とそれに関連する th 要素の関係は定義されていません。このテーブルには複数レベルの th 要素があるため、 td 要素には headers 属性を使用する必要があります。',
      '1_3_1_H43.MissingHeaderIds':
        'このテーブルに id 属性を含まない th 要素があります。これらのセルは、それらが td 要素の headers 属性によって参照されるように ID を含むべきです。',
      '1_3_1_H43.MissingHeadersAttrs':
        'このテーブルに headers 属性を含まない td 要素があります。各 headers 属性は、そのセルに関連付けられているすべての th 要素の ID を列挙する必要があります。',
      '1_3_1_H43,H63':
        'td 要素とそれに関連する th 要素の関係は定義されていません。 th 要素に scope 属性を使用するか、td 要素に headers 属性を使用してください。',
      '1_3_1_H63.1':
        'このテーブルに scope 属性をもたない th 要素があります。これらのセルは、 td 要素との関連を識別するための scope 属性を含むべきです。',
      '1_3_1_H73.3.LayoutTable':
        'このテーブルはレイアウトに使用されているように見えますが、 summary 属性が含まれています。レイアウトテーブルに summary 属性を含めないか、または、指定されている場合は空にしてください。',
      '1_3_1_H39,H73.4':
        'このテーブルがデータテーブルで、 summary 属性と caption 要素の両方が存在する場合、 summary は caption を複製しないでください。',
      '1_3_1_H73.3.Check':
        'このテーブルがデータテーブルである場合は、 summary 属性がテーブルの構成を説明していること、またはテーブルの使用方法を説明していることを確認してください。',
      '1_3_1_H73.3.NoSummary':
        'このテーブルがデータテーブルの場合は、 table 要素の summary 属性を使用してこのテーブルの概要を説明してください。',
      '1_3_1_H39.3.LayoutTable':
        'このテーブルはレイアウトに使用されているように見えますが、 caption 要素が含まれています。レイアウトテーブルに caption を含めることはできません。',
      '1_3_1_H39.3.Check':
        'このテーブルがデータテーブルの場合は、 caption 要素がこのテーブルを正確に記述していることを確認してください。',
      '1_3_1_H39.3.NoCaption':
        'このテーブルがデータテーブルである場合は、このテーブルを識別するために table 要素に caption 要素を使用することを検討してください。',
      '1_3_1_H71.NoLegend':
        'フィールドセットに legend 要素が含まれていません。すべてのフィールドセットには、フィールドグループの説明を記述する legend 要素を含める必要があります。',
      '1_3_1_H85.2':
        'この選択リストに関連オプションのグループが含まれている場合は、それらを optgroup とグループ化する必要があります。',
      '1_3_1_H71.SameName':
        'これらのラジオボタンまたはチェックボックスにさらにグループレベルの説明が必要な場合は、それらを fieldset 要素に含める必要があります。',
      '1_3_1_H48.1':
        'このコンテンツは、プレーンテキストを使用して番号なしリストをシミュレートしているように見えます。もしそうなら、 ul 要素でこの内容をマークアップすることで文書に適切な構造情報を追加します。',
      '1_3_1_H48.2':
        'このコンテンツは、プレーンテキストを使用して番号付きリストをシミュレートしているように見えます。もしそうなら、 ol 要素でこの内容をマークアップすることで文書に適切な構造情報を追加します。',
      '1_3_1_G141_a':
        '見出し構造が論理的にネストされていません。この h{{headingNum}} 要素は主な文書見出しであるようにみえるため、 h1 要素であるべきです。',
      '1_3_1_G141_b':
        '見出し構造が論理的にネストされていません。適切にネストするには、この h{{headingNum}} 要素を h{{properHeadingNum}} にする必要があります。',
      '1_3_1_H42.2':
        '見出しタグがコンテンツなしで見つかりました。見出しとして意図されていないテキストは、見出しタグでマークアップしてはいけません。',
      '1_3_1_H48':
        'この要素にナビゲーションセクションが含まれる場合は、リストとしてマークアップすることを推奨します。',
      '1_3_1_LayoutTable':
        'このテーブルはレイアウトテーブルのようにみえます。もしデータテーブルであることを意図している場合、 th 要素を使用することでヘッダーセルが識別されるようにしてください。',
      '1_3_1_DataTable':
        'このテーブルはデータテーブルのようにみえます。もしレイアウトテーブルであることを意図している場合は、 th 要素がないこと、および summary または caption がないことを確認してください。',
      '1_3_2_G57':
        'スタイルシートが無効になっている場合など、線形化されたときにコンテンツが意味のある順序で並べられていることを確認してください。',
      '1_3_3_G96':
        'コンテンツを理解するための説明が提供されている場合は、オブジェクトを説明するために（形状、サイズ、場所などの）感覚的な特性だけに頼らないでください。',
      '1_4_1_G14,G18':
        '色だけを使って伝えられる情報がテキストや他の視覚的な手がかりを通しても利用可能であることを確認してください。',
      '1_4_2_F23':
        'この要素に3秒を超えて自動再生される音声が含まれている場合は、音声を一時停止、停止、またはミュートする機能があることを確認してください。',
      '1_4_3_F24.BGColour':
        'この要素に継承された前景色があり、対応するインラインの背景色または画像を引き立てていることを確認してください。',
      '1_4_3_F24.FGColour':
        'この要素に継承された背景色または画像があり、対応するインラインの前景色を引き立てていることを確認してください。',
      '1_4_3_G18_or_G145.Abs':
        'この要素は絶対位置に配置されているため、背景色を決定できません。テキストと背景の覆われた部分すべてのコントラスト比が少なくとも{{required}}:1であることを確認してください。',
      '1_4_3_G18_or_G145.BgImage':
        'この要素のテキストは背景画像に配置されます。テキストと画像の覆われている部分すべてのコントラスト比が少なくとも{{required}}:1であることを確認してください。',
      '1_4_3_G18_or_G145.Alpha':
        'この要素のテキストまたは背景は透明部分を含みます。テキストと背景のコントラスト比が少なくとも{{required}}:1であることを確認してください。',
      '1_4_3_G18_or_G145.Fail':
        'この要素は、この適合レベルではコントラストが不十分です。少なくとも{{required}}:1のコントラスト比が必要ですが、この要素のテキストのコントラスト比は{{value}}:1です。',
      '1_4_3_G18_or_G145.Fail.Recomendation': '推奨: ',
      '1_4_3_G18_or_G145.Fail.Recomendation.Text': '文字色を{{value}}に変更する',
      '1_4_3_G18_or_G145.Fail.Recomendation.Background': '背景を{{value}}に変更する',
      '1_4_4_G142':
        'コンテンツや機能を損なうことなく、支援技術なしでテキストを200パーセントまでリサイズできることを確認してください。',
      '1_4_5_G140,C22,C30.AALevel':
        '使用している技術で意図した視覚的提示が可能である場合、文字画像ではなくテキストが情報伝達に用いられているか確認してください。ただし、文字画像が、伝えようとする情報にとって必要不可欠であるか、または、利用者の要求に応じて視覚的にカスタマイズできる場合を除きます。',
      '1_4_6_G18_or_G17.Abs':
        'この要素は絶対位置に配置されているため、背景色を決定できません。テキストと背景の覆われた部分すべてのコントラスト比が少なくとも{{required}}:1であることを確認してください。',
      '1_4_6_G18_or_G17.BgImage':
        'この要素のテキストは背景画像に配置されます。テキストと画像の覆われている部分すべてのコントラスト比が少なくとも{{required}}:1であることを確認してください。',
      '1_4_6_G18_or_G17.Fail':
        'この要素は、この適合レベルではコントラストが不十分です。少なくとも{{required}}:1のコントラスト比が必要ですが、この要素のテキストのコントラスト比は{{value}}:1です。',
      '1_4_6_G18_or_G17.Fail.Recomendation': '推奨: ',
      '1_4_6_G18_or_G17.Fail.Recomendation.Text': '文字色を{{value}}に変更する',
      '1_4_6_G18_or_G17.Fail.Recomendation.Background': '背景を{{value}}に変更する',
      '1_4_7_G56':
        '主に（ナレーションなどの）スピーチである要素内の事前録音された音声のみのコンテンツでは、背景音はミュート可能であるか、またはスピーチより少なくとも20dB（または約4倍）静かである必要があります。',
      '1_4_8_G148,G156,G175':
        'ウェブページまたはブラウザを介して、ユーザーがテキストブロックの前景色と背景色を選択できるメカニズムがあることを確認してください。',
      '1_4_8_H87,C20':
        'テキストブロックの幅を80文字以下（中国語、日本語、または韓国語のスクリプトでは40文字以下）に縮小するメカニズムが存在することを確認してください。',
      '1_4_8_C19,G172,G169':
        'テキストブロックが両端揃えされていないこと、または両端揃えを削除するためのメカニズムが存在することを確認してください。',
      '1_4_8_G188,C21':
        'テキストブロック内の行間隔が段落内で少なくとも150％であり、段落間隔が行間隔の少なくとも1.5倍であること、またはこれを達成するためのメカニズムが使用可能であることを確認してください。',
      '1_4_8_H87,G146,C26':
        'ユーザーがフルスクリーンウィンドウ上で水平にスクロールすることを必要とせずに、支援技術なしでテキストを200パーセントまでリサイズできることを確認してください。',
      '1_4_9_G140,C22,C30.NoException':
        'テキストのイメージが純粋な装飾のためか、または、伝えられる情報にテキストの特定の表現が不可欠である場合にだけ使われているか確認してください。',
      '2_1_1_G90':
        'この要素のイベントハンドラによって提供される機能がキーボードから利用可能であることを確認してください。',
      '2_1_1_SCR20.DblClick':
        'この要素をダブルクリックすることで提供される機能がキーボードから利用可能であることを確認してください。',
      '2_1_1_SCR20.MouseOver':
        'この要素の上にマウスを置くことで提供される機能がキーボードから利用可能であることを確認してください。たとえば、フォーカスイベントの使用などです。',
      '2_1_1_SCR20.MouseOut':
        'この要素からマウスを外すことによって提供される機能がキーボードを通して利用可能であることを確認してください。たとえば、 blur イベントの使用などです。',
      '2_1_1_SCR20.MouseMove':
        'この要素上でマウスを動かすことによって提供される機能がキーボードを通して利用可能であることを確認してください。',
      '2_1_1_SCR20.MouseDown':
        'この要素をマウスオーバーすることで提供される機能がキーボードから利用可能であることを確認してください。たとえば、 keydown イベントの使用などです。',
      '2_1_1_SCR20.MouseUp':
        'この要素にマウスを合わせることで提供される機能がキーボードから利用可能であることを確認してください。たとえば、 keyup イベントの使用などです。',
      '2_1_2_F10':
        'このアプレットまたはプラグインが、キーボードを使用しているときにフォーカスをそれ自体から遠ざける機能を提供することを確認してください。',
      '2_2_1_F40.2':
        '別のページにリダイレクトするために使用される Meta リフレッシュタグの制限時間が0ではありません。ユーザーはこの制限時間を制御できません。',
      '2_2_1_F41.2':
        '現在のページを更新するために meta リフレッシュタグが使用されています。ユーザーはこの更新の制限時間を制御できません。',
      '2_2_2_SCR33,SCR22,G187,G152,G186,G191':
        'コンテンツの一部が5秒より長く移動、スクロール、点滅、または自動更新される場合は、コンテンツを一時停止、停止、非表示にできるメカニズムがあることを確認してください。',
      '2_2_2_F4':
        'この点滅している要素を5秒以内に止めることができるメカニズムがあることを確認してください。',
      '2_2_2_F47': 'blink 要素は、点滅情報を5秒以内に停止できるという要件を満たせません。',
      '2_2_3_G5':
        'タイミングがコンテンツによって提示されるイベントまたはアクティビティの重要な部分でないことを確認してください。ただし、インタラクティブでない同期したメディアおよびリアルタイムイベントを除きます。',
      '2_2_4_SCR14':
        '緊急時の中断を除いて、すべての中断（コンテンツの更新を含む）がユーザーによって延期または抑制できることを確認してください。',
      '2_2_5_G105,G181':
        'このウェブページが無活動時間制限のある一連のウェブページの一部である場合は、認証されたユーザーが再認証後にデータを失うことなくアクティビティを続行できることを確認してください。',
      '2_3_1_G19,G176':
        'コンテンツのすべてのコンポーネントが、どの1秒間においても3回を超えて点滅していないこと、または点滅している領域のサイズが十分に小さいことを確認してください。',
      '2_3_2_G19':
        'コンテンツのすべてのコンポーネントが、どの1秒間においても3回を超えて点滅していないことを確認してください。',
      '2_4_1_H64.1': 'iframe 要素には、フレームを識別する空でない title 属性が必要です。',
      '2_4_1_H64.2':
        'この要素の title 属性にフレームを識別するテキストが含まれていることを確認してください。',
      '2_4_1_G1,G123,G124,H69':
        '一般的なナビゲーション要素はすべて迂回できることを確認してください。例えば、スキップリンク、ヘッダ要素、または ARIA ランドマークを使用します。',
      '2_4_1_G1,G123,G124.NoSuchID':
        'このリンクはドキュメント内の名前付きアンカー "{{id}}" を指していますが、その名前のアンカーは存在しません。',
      '2_4_1_G1,G123,G124.NoSuchIDFragment':
        'このリンクはドキュメント内の名前付きアンカー "{{id}}" を指していますが、テストされたフラグメント内にその名前のアンカーは存在しません。',
      '2_4_2_H25.1.NoHeadEl': '説明的な title 要素を配置するための head セクションがありません。',
      '2_4_2_H25.1.NoTitleEl':
        'head セクションの空でない title 要素を使って、文書にタイトルをつけるべきです。',
      '2_4_2_H25.1.EmptyTitle': 'head セクションの title 要素が空ではありません。',
      '2_4_2_H25.2': 'title 要素が文書を説明していることを確認してください。',
      '2_4_3_H4.2':
        'tabindex が使用されている場合は、 tabindex 属性で指定されたタブ順序がコンテンツ内の関係に従っていることを確認してください。',
      '2_4_4_H77,H78,H79,H80,H81,H33':
        'プログラムで解釈されるリンクのコンテキストまたはその title 属性と組み合わせたときに、リンクテキストからリンクの目的が判断できることを確認してください。',
      '2_4_4_H77,H78,H79,H80,H81':
        'プログラムで解釈されるリンクのコンテキストと組み合わせたときに、リンクテキストからリンクの目的が判断できることを確認してください。',
      '2_4_5_G125,G64,G63,G161,G126,G185':
        'このウェブページが一連のプロセスの一部でない場合は、ウェブページ一式の中でこのウェブページを見つける方法が複数あることを確認してください。',
      '2_4_6_G130,G131': '見出しとラベルがトピックや目的を説明していることを確認してください。',
      '2_4_7_G149,G165,G195,C15,SCR31':
        'キーボードフォーカスのインジケータをユーザーインターフェイス操作子に視覚的に配置できる操作モードが少なくとも1つあることを確認してください。',
      '2_4_8_H59.1': 'link 要素はドキュメントのヘッドセクションにのみ配置できます。',
      '2_4_8_H59.2a': 'link 要素に、リンクタイプを識別する空でない rel 属性がありません。',
      '2_4_8_H59.2b': 'link 要素に、リンクされているリソースを指す空でない href 属性がありません。',
      '2_4_9_H30': 'リンクテキストがリンクの目的を説明していることを確認してください。',
      '3_1_1_H57.2':
        'html 要素には、ドキュメントの言語を記述する lang 属性または xml:lang 属性を含める必要があります。',
      '3_1_1_H57.3.Lang': 'document 要素の lang 属性に指定されている言語が整形式ではないようです。',
      '3_1_1_H57.3.XmlLang':
        'document 要素の xml:lang 属性に指定されている言語が整形式ではないようです。',
      '3_1_2_H58':
        '言語の変更が、要素の lang 属性または xml:lang 属性、あるいはその両方を使用して適切にマークアップされていることを確認してください。',
      '3_1_2_H58.1.Lang': 'この要素の lang 属性に指定されている言語は、整形式ではないようです。',
      '3_1_2_H58.1.XmlLang':
        'この要素の xml:lang 属性に指定されている言語は、整形式ではないようです。',
      '3_1_3_H40,H54,H60,G62,G70':
        '慣用句や専門用語を含む、特殊または制限された用法の単語やフレーズの特定の定義を識別するためのメカニズムが利用可能であることを確認してください。',
      '3_1_4_G102,G55,G62,H28,G97':
        '展開形式または略語の意味を識別するためのメカニズムが利用可能であることを確認してください。',
      '3_1_5_G86,G103,G79,G153,G160':
        'コンテンツが中等教育レベルよりも高度な読解力を必要とする場合は、補足的なコンテンツまたは代替バージョンを提供する必要があります。',
      '3_1_6_H62.1.HTML5': 'ruby 要素が、本文の発音情報を含む rt 要素を含んでいません。',
      '3_1_6_H62.1.XHTML11':
        'ruby 要素が、 rb 要素内のテキストの発音情報を含む rt 要素を含んでいません。',
      '3_1_6_H62.2':
        'ruby 要素に rp 要素が含まれていません。これは、ルビテキストをサポートしていないブラウザに余分な句読点を提供します。',
      '3_2_1_G107':
        'この入力フィールドがフォーカスを受けたときにコンテキストの変更が起こらないことを確認してください。',
      '3_2_2_H32.2':
        'このフォームには送信ボタンがありません。キーボードを使用してフォームを送信できないユーザーに問題が発生します。送信ボタンは、 type 属性が "submit" または "image" の INPUT 要素、またはタイプが "submit" または省略/無効の BUTTON 要素です。',
      '3_2_3_G61':
        '複数のウェブページ上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに相対的に同じ順序で出現することを確認してください。ただし、利用者が変更した場合を除きます。',
      '3_2_4_G197':
        'このウェブページ内で同じ機能を有するコンポーネントが、それが属するウェブページ一式の中で一貫して識別できることを確認してください。',
      '3_2_5_H83.3':
        'このリンクのリンクテキストに、リンクが新しいウィンドウで開くことを示す情報が含まれていることを確認してください。',
      '3_3_1_G83,G84,G85':
        'この形式で入力エラーが自動的に検出された場合は、エラーのある項目が識別され、エラーがテキストでユーザーに説明されていることを確認してください。',
      '3_3_2_G131,G89,G184,H90':
        'このフォームのユーザー入力に説明ラベルまたは説明（必須フィールドを含む）が指定されていることを確認してください。',
      '3_3_3_G177':
        'コンテンツのセキュリティや目的を損なうことがない限り、このフォームがユーザー入力の誤りに対する推奨される修正を提供することを確認してください。',
      '3_3_4_G98,G99,G155,G164,G168.LegalForms':
        'このフォームがユーザーに財務上または法律上のコミットメントを義務付ける場合、ユーザーが制御可能なデータを修正または削除する、またはテスト回答を送信する場合は、送信が可逆であるか、入力エラーのチェックを行っているか、またはユーザーによる確認を行っているかを確認してください。',
      '3_3_5_G71,G184,G193':
        'ウェブフォームやコントロールレベルで、このフォームの状況依存ヘルプが利用できることを確認してください。',
      '3_3_6_G98,G99,G155,G164,G168.AllForms':
        'このフォームへの送信が可逆であるか、入力エラーのチェックを行っているか、またはユーザーによる確認を行っているかを確認してください。',
      '4_1_1_F77': 'ウェブページに重複したid属性値 "{{id}}" が見つかりました。',
      '4_1_2_H91.A.Empty':
        'アンカー要素がID付きで見つかりましたが href またはリンクテキストがありません。このIDを親または近くの要素に移動することを検討してください。',
      '4_1_2_H91.A.EmptyWithName':
        'name属性を持つアンカー要素が見つかりましたが、 href またはリンクテキストがありません。 name 属性を親または近くの要素のIDになるように移動することを検討してください。',
      '4_1_2_H91.A.EmptyNoId':
        'アンカー要素にリンクのコンテンツがなく、name または ID 属性もありません。',
      '4_1_2_H91.A.NoHref':
        'アンカー要素をページ内リンクの対象の定義に使用するべきではありません。このIDが別の目的(CSSやスクリプト等)で使用されていないなら、親要素へ移動することを検討してください。',
      '4_1_2_H91.A.Placeholder':
        '有効なリンクのコンテンツをもつアンカー要素が見つかりましたが、 href 、 ID 、 name のいずれの属性も与えられていません。',
      '4_1_2_H91.A.NoContent':
        '有効なhref属性をもつアンカー要素が見つかりましたが、リンクのコンテンツが与えられていません。',
      '4_1_2_input_element': 'input 要素',
      '4_1_2_element_content': '要素のコンテンツ',
      '4_1_2_element': '要素',
      '4_1_2_msg_pattern':
        'この {{msgNodeType}} は、アクセシビリティAPIに名前を提供していません。有効な名前は: {{builtAttrs}}.',
      '4_1_2_msg_pattern_role_of_button':
        'この要素は "button" ロールをもっていますが、アクセシビリティAPIに名前を提供していません。有効な名前は: {{builtAttrs}}.',
      '4_1_2_msg_pattern2': 'この {{msgNodeType}} は、アクセシビリティAPIに値を提供していません。',
      '4_1_2_msg_add_one': '要素にコンテントを追加することで一つ追加します。',
      '4_1_2_msg_pattern3':
        'この {{msgNodeType}} は、初期の選択項目をもっていません。お使いのHTMLバージョンによっては、アクセシビリティAPIから見える値は未定義となるかもしれません。',
      '4_1_2_value_exposed_using_attribute':
        '{{requiredValue}} 属性を使用することで値が露出します。',
      '4_1_2_value_exposed_using_element': '{{requiredValue}} 要素を使用することで値が露出します。',
    }),
    (_global.translation.nl = {
      'auditor_name': 'HTML_CodeSniffer door Squiz',
      'auditor_using_standard': 'Gebruikt de standaard',
      'auditor_standards': 'Standaarden',
      'auditor_code_snippet': 'Codefragment',
      'auditor_close': 'Sluiten',
      'auditor_select_types': 'Kies welk type problemen op te nemen in het verslag',
      'auditor_home': 'Home',
      'auditor_view_report': 'Bekijk het verslag',
      'auditor_report': 'Verslag',
      'auditor_back_to_report': 'Terug naar het verslag',
      'auditor_previous_issue': 'Vorig probleem',
      'auditor_next_issue': 'Volgend probleem',
      'auditor_issue': 'Probleem',
      'auditor_of': 'van',
      'auditor_errors': 'Fouten',
      'auditor_error': 'Fout',
      'auditor_warnings': 'Waarschuwingen',
      'auditor_warning': 'Waarschuwing',
      'auditor_notices': 'Kennisgevingen',
      'auditor_notice': 'Kennisgeving',
      'auditor_toggle_display_of': 'Schakel weergave van',
      'auditor_messages': 'berichten',
      'auditor_unable_to_point':
        'Kan niet wijzen naar het element waarop dit probleem betrekking heeft.',
      'auditor_unable_to_point_entire':
        'Kan niet wijzen naar dit probleem, aangezien het betrekking heeft op het hele document',
      'auditor_unable_to_point_removed':
        'Kan niet wijzen naar dit element, het werd verwijderd sedert de aanmaak van dit verslag',
      'auditor_unable_to_point_outside':
        'Kan niet wijzen naar dit element, het bevindt zich buiten het body-element van de pagina',
      'auditor_unable_to_point_hidden':
        'Kan niet wijzen naar dit element, het is verborgen of heeft geen visuele representatie',
      'auditor_point_to_element': 'Wijzen naar het element',
      'auditor_unsupported_browser':
        'De codefragment functionaliteit wordt niet ondersteund door deze browser',
      'auditor_page': 'Pagina',
      'auditor_updated_to': 'HTML_CodeSniffer werd bijgewerkt naar versie',
      'auditor_view_the_changelog': 'Bekijk de changelog',
      'auditor_success_criterion': 'Succescriterium',
      'auditor_suggested_techniques': 'Voorgestelde technieken',
      'auditor_applies_entire_document': 'Dit is van toepassing op het hele document',
      '1_1_1_H30.2':
        'Img element is de enige inhoud van de link, maar bevat geen alt tekst. De alt tekst dient het doel van deze link te beschrijven.',
      '1_1_1_H67.1':
        'Img element met een lege alt tekst mag enkel geen of een leeg titel attribuut hebben.',
      '1_1_1_H67.2': 'Img element werd gemarkeerd om  genegeerd te worden door Hulptechnologie',
      '1_1_1_H37':
        'Img element bevat geen alt attribuut. Gebruik een alt attribuut om een kort tekstalternatief weer te geven.',
      '1_1_1_G94.Image':
        'Zorg ervoor dat het alt attribuut van dit img element hetzelfde doel dient en dezelfde informatie weergeeft als de afbeelding.',
      '1_1_1_H36':
        'Afbeelding in de indienknop heeft geen alt attribuut.  Zorg voor een tekstalternatief dat de functie van de knop beschrijft, gebruik een alt attribuut.',
      '1_1_1_G94.Button':
        'Zorg ervoor dat alt text van de afbeelding in de indienknop het doel van de knop beschrijft.',
      '1_1_1_H24':
        'Area-element in een image map heeft geen alt attribuut. Ieder area element moet een tekstalternatief hebben dat de functie ervan beschrijft.',
      '1_1_1_H24.2':
        'Zorg ervoor dat het tekstalternatief van het area element hetzelfde doel heeft als het deel van de image map afbeelding waarnaar het verwijst.',
      '1_1_1_G73,G74':
        'Als dit beeld niet volledig kan omschreven worden in een kort tekstalternatief, zorg er dan voor dat een langer tekstalternatief beschikbaar is, bijvoorbeeld in de bodytekst of via een link.',
      '1_1_1_H2.EG5':
        'Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link herhaalt',
      '1_1_1_H2.EG4':
        'Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.',
      '1_1_1_H2.EG3':
        'Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.',
      '1_1_1_H53,ARIA6':
        'Object elementen moeten een tekstalternatief bevatten indien alle andere alternatieven uitgeput zijn.',
      '1_1_1_G94,G92.Object,ARIA6':
        'Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.',
      '1_1_1_H35.3':
        'Applet elementen moeten een tekstalternatief bevatten in de body van het element, voor browsers die het applet element niet ondersteunen.',
      '1_1_1_H35.2':
        'Applet elementen moeten een alt attribuut  bevatten, om een tekst-alternatief te bieden in browsers die het element ondersteunen maar de applet niet kunnen laden.',
      '1_1_1_G94,G92.Applet':
        'Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.',
      '1_2_1_G158':
        'Indien dit embedded object vooraf opgenomen audio bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is.',
      '1_2_1_G159,G166':
        'Indien dit embedded object vooraf opgenomen video bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is, of dat een audiospoor beschikbaar is dat equivalente informatie aanbiedt.',
      '1_2_2_G87,G93':
        'Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of ondertitels aangeboden worden voor audio inhoud.',
      '1_2_3_G69,G78,G173,G8':
        'Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of er een audio beschrijving voor de video, en/of een alternatieve tekstversie beschikbaar is.',
      '1_2_4_G9,G87,G93':
        'Indien dit embedded object gesynchroniseerde media bevat, controleer dan of er ondertitels aangeboden worden voor live audio inhoud.',
      '1_2_5_G78,G173,G8':
        'Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat , controleer dan of er een audio beschrijving voor de video inhoud.',
      '1_2_6_G54,G81':
        'Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, controleer dan of er een gebarentaal interpretatie beschikbaar is voor de audio-inhoud.',
      '1_2_7_G8':
        'Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, en pauzes in de voorgrond-audio onvoldoende zijn voor audiobeschrijving om de betekenis van de opgenomen video te communiceren, controleer dan of er een uitgebreide audiobeschrijving voorzien is, ofwel via scripting of via een alternatieve versie.',
      '1_2_8_G69,G159':
        'Indien dit embedded object vooraf opgenomen gesynchroniseerde media of louter video bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.',
      '1_2_9_G150,G151,G157':
        'Indien dit embedded object enkel live audio-inhoud bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.',
      '1_3_1_F92,ARIA4':
        'De rol van dit element is "presentation" maar deze bevat onderliggende elementen met een semantische betekenis.',
      '1_3_1_H44.NonExistent':
        'Het "for" attribuut van dit label bevat een ID die niet bestaat in het document.',
      '1_3_1_H44.NonExistentFragment':
        'Het "for" attribuut van dit label bevat een ID die niet bestaat in het documentfragment.',
      '1_3_1_H44.NotFormControl':
        'Het "for" attribuut van dit label bevat een ID voor een element dat geen formulierbesturingselement. Controleer of het juiste ID ingevoerd is voor het bedoelde element.',
      '1_3_1_H65':
        'Dit formulierbesturingselement heeft een "titel" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
      '1_3_1_ARIA6':
        'Dit formulierbesturingselement heeft een "aria-label" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
      '1_3_1_ARIA16,ARIA9':
        'Dit formulierbesturingselement heeft een "aria-labelledby" attribuut, dit bevat echter eeb ID "{{id}}" dat niet bestaat op een element. Het wordt genegeerd voor label testdoeleinden.',
      '1_3_1_F68.Hidden':
        'Dit verborgen formulierveld is gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.',
      '1_3_1_F68.HiddenAttr':
        'Dit formulierveld is bedoeld om verborgen te zijn (via het "hidden" attribuut), maar is ook gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.',
      '1_3_1_F68':
        'Dit formulierveld zou gelabeled moeten zijn. Gebruik het label element (ofwel met een "for" attribuut of als omvattend element rond het formulierveld), of "title" "aria-label" of "aria-labbeledby" attributen waar gepast.',
      '1_3_1_H49.': 'Presentationele markup gebruikt die vervallen is in HTML5',
      '1_3_1_H49.AlignAttr': 'Align attributen.',
      '1_3_1_H49.Semantic':
        'Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.',
      '1_3_1_H49.AlignAttr.Semantic':
        'Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.',
      '1_3_1_H42':
        'Heading markup zou gebruikt moeten worden indien deze inhoud bedoeld is als een hoofding.',
      '1_3_1_H63.3':
        'Tabelcel heeft een ongeldig scope attribuut. Geldige waardes zijn row, col, rowgroup of colgroup',
      '1_3_1_H63.2':
        'Scope attributen op td elementen die als hoofdingen gebruikt worden voor andere elementen zijn vervallen in HTML. Gebruik in plaats daarvan een th element.',
      '1_3_1_H43.ScopeAmbiguous':
        'Scope attributen op th elementen zijn ambigu in een tabel met meerdere niveaus van hoofding. Gebruik in plaats daarvan het headers attribuut op td elementen.',
      '1_3_1_H43.IncorrectAttr':
        'Foutief headers attribuut op dit td element. "{{expected}}" werd verwacht maar "{{actual}}" gevonden',
      '1_3_1_H43.HeadersRequired':
        'De relatie tussen td elementen en de eraan gebonden th elementen werd niet omschreven. Gezien deze tabel meerdere niveaus th elmenten bevat, moet het headers attribuut gebruikt worden op td elementen.',
      '1_3_1_H43.MissingHeaderIds':
        'Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.',
      '1_3_1_H43.MissingHeadersAttrs':
        'Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel',
      '1_3_1_H43,H63':
        'De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.',
      '1_3_1_H63.1':
        'Niet alle th elementen in deze tabel hebben een scope attribuut. Deze cellen zouden een scope attribuut moeten bevatten om hun verband met td elementen te identificeren.',
      '1_3_1_H73.3.LayoutTable':
        'Deze tabel lijkt gebruikt te worden voor opmaak, maar bevat een summary attribuut. Opmaaktabellen mogen geen summary attributen bevatten, of indien deze toch aanwezig zijn, moeten ze leeg zijn.',
      '1_3_1_H39,H73.4':
        'Indien deze tabel een datatabel is en zowel het summary als het caption element aanwezig zijn, mag het summary attribuut geen herhaling zijn van het caption element',
      '1_3_1_H73.3.Check':
        'Indien deze tabel een datatabel is, controleer dan dat het summary attribuut de organisatie en het gebruik van deze tabel verduidelijkt.',
      '1_3_1_H73.3.NoSummary':
        'Indien deze tabel een datatabel is, overweeg dan het summary attribuut van het tabel element te gebruiken om een overzicht over deze tabel te geven.',
      '1_3_1_H39.3.LayoutTable':
        'Deze tabel lijkt gebruik te worden voor opmaak, maar bevat een caption element. Opmaaktabellen mogen geen caption bevatten.',
      '1_3_1_H39.3.Check':
        'Indien deze tabel een datatabel is, controleer dan dat het caption element een nauwkeurige beschrijving geeft van de tabel.',
      '1_3_1_H39.3.NoCaption':
        'Indien deze tabel een datatabel is, overweeg dan een caption element bij het table element te gebruiken om de tabel te identificeren.',
      '1_3_1_H71.NoLegend':
        'Fieldset bevat geen legend element. Alle fieldsets zouden een legend element moeten bevatten dat een beschrijving geeft van de veldengroep.',
      '1_3_1_H85.2':
        'Indien deze keuzelijst groepen verwante opties bevat, zouden ze gegroepeerd moeten worden met optgroup.',
      '1_3_1_H71.SameName':
        'Indien radioknoppen of selectievakjes een verdere beschrijving vergen op groepsniveau, zouden ze moeten omvat worden in een fieldset element.',
      '1_3_1_H48.1':
        'Deze inhoud lijkt op een gesimuleerde niet-geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ul-element de informatie in het document een betere structuur geven.',
      '1_3_1_H48.2':
        'Deze inhoud lijkt op een gesimuleerde geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ol-element de informatie in het document een betere structuur geven.',
      '1_3_1_G141_a':
        'De hoofdingstructuur is niet logisch genest. Dit h{{headingNum}} element lijkt de primaire documenthoofding te zijn, dit zou dan een h1 element moeten zijn.',
      '1_3_1_G141_b':
        'De hoofdingstructuur is niet logisch genest. Dit h{{headingNum}} element zou een h{{properHeadingNum}} moeten zijn voor een juiste structuur.',
      '1_3_1_H42.2':
        'Hoofding tag gevonden zonder inhoud. Tekst die niet bedoeld is als hoofding zou niet mogen gemarkeerd worden met een hoofding tag.',
      '1_3_1_H48':
        'Indien dit element een navigatie-sectie bevat, wordt aanbevolen lijst-markup te gebruiken.',
      '1_3_1_LayoutTable':
        'Deze tabel lijkt een opmaaktabel te zijn. Indien deze bedoeld is als een datatabel, zorg er dan voor dat hoofding cellen geÔdentificeerd worden met th elementen.',
      '1_3_1_DataTable':
        'Deze tabel lijkt een datatabel te zijn. Indien deze bedoeld is als een opmaaktabel, zorg er dan voor dat er geen th elementen, summary of caption aanwezig zijn.',
      '1_3_2_G57':
        'Controleer dat de inhoud in een betekenisvolle volgorde staat indien lineair weergegeven, zoals wanneer stylesheets gedesactiveerd zijn.',
      '1_3_3_G96':
        'Indien instructies voorzien zijn voor het goed begrip van de inhoud, reken dan niet enkel op zintuigelijke eigenschappen (zoals vorm, grootte of positie) om voorwerpen te omschrijven.',
      '1_3_4.RestrictView':
        "Controleer dat de inhoud zijn uitzicht en werking niet beperkt tot ÈÈn weergave-oriëntatie, zoals staand of liggend, tenzij zo'n specifieke weergave-oriëntatie essentieel is.",
      '1_3_5_H98.FaultyValue':
        'Dit element bevat een potentieel foutieve waarde in het autocomplete attribuut: {{valuesStr}}. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute.',
      '1_3_5_H98.InvalidAutocomplete_Text':
        'Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Text besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute',
      '1_3_5_H98.InvalidAutocomplete_Multiline':
        'Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Multiline besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute',
      '1_3_5_H98.InvalidAutocomplete_Password':
        'Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Password besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute',
      '1_3_5_H98.InvalidAutocomplete_Url':
        'Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Url besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute',
      '1_3_5_H98.InvalidAutocomplete_Telephone':
        'Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Telephone besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute',
      '1_3_5_H98.InvalidAutocomplete_Numeric':
        'Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Numeric besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute',
      '1_3_5_H98.InvalidAutocomplete_Month':
        'Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Month besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute',
      '1_3_5_H98.InvalidAutocomplete_Date':
        'Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Date besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute',
      '1_3_5_H98.Purpose':
        'Controleer dat het invoerveld een doel dient zoals beschreven in Input Purposes for User Interface Components sectie, en dat de inhoud is geÔmplementeerd met technologiën die het identificeren van de verwachtte betekenis van formulierinvoerdata ondersteunen.',
      '1_3_5_H98.MissingAutocomplete':
        'Dit element heeft geen autocomplete attribuut. Indien dit veld informatie verzamelt over de gebruiker, overweeg dan er ÈÈn toe te voegen om te conformeren met dit succescriterium.',
      '1_3_6_ARIA11.Check':
        "Controleer dat het doel van de gebruikersinterface-onderdelen, iconen en regio's programmatorisch kunnen bepaald worden",
      '1_4_1_G14,G18':
        'Controleer dat alle informatie die gecommuniceerd wordt via kleur eveneens beschikbaar is als tekst of als een andere visuele hint.',
      '1_4_2_F23':
        'Indien dit element audiop bevat die automatisch langer dan 3 seconden speelt, controleer dan dat de mogelijkheid bestaat om de audio te pauzeren, stoppen of stil te zetten.',
      '1_4_3_F24.BGColour':
        'Controleer of dit element een overgeërfde voorgrondkleur heeft die complementair is met de overeenkomstige inline achtergrondkleur of afbeelding.',
      '1_4_3_F24.FGColour':
        'Controleer of dit element een overgeërfde achtergrondkleur of afbeelding heeft die complementair is met de overeenkomstige inline voorgrondkleur.',
      '1_4_3_G18_or_G145.Abs':
        'Dit element is absoluut gepositioneerd en de achtergrondkleur kan niet bepaald worden. Zorg ervoor dat de contrastverhouding tussen de tekst en alle bedekte delen van de achtergond minstens {{required}}:1 is.',
      '1_4_3_G18_or_G145.BgImage':
        'De tekst van dit element werd geplaatst op een achtergrondafbeelding. Zorg ervoor dat de contrastverhouding tussen de tekst en alle bedekte delen van de achtergrondafbeelding minstens {{required}}:1 is.',
      '1_4_3_G18_or_G145.Alpha':
        'De tekst of achtergrond van dit element bevat transparantie. Zorg ervoor dat de contrastverhouding tussen de tekst en de achtergond minstens {{required}}:1 is.',
      '1_4_3_G18_or_G145.Fail':
        'Dit element heeft onvoldoende contrast op dit conformantie-niveau. Een contrastverhouding van minstens {{required]}}:1 wordt verwacht, maar de tekst in dit element heeft een contrastverhouding van {{value}}:1.',
      '1_4_3_G18_or_G145.Fail.Recomendation': 'Aanbeveling:',
      '1_4_3_G18_or_G145.Fail.Recomendation.Text': 'verander tekstkleur naar {{value}}',
      '1_4_3_G18_or_G145.Fail.Recomendation.Background': 'verander achtergrond naar{{value}}',
      '1_4_4_G142':
        'Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie en zonder verlies van inhoud of functionaliteit.',
      '1_4_5_G140,C22,C30.AALevel':
        'Indien de gebruikte technologie de visuele presentatie kan weergeven, controleer dan dat tekst gebruikt werd om informatie weer te geven, in plaats van afbeeldingen van tekst, behalve als de afbeelding van tekst essentieel is voor de weer te geven informatie, of visueel kan aangepast worden aan de noden van de gebruiker.',
      '1_4_6_G18_or_G17.Abs':
        'Dit element is absoluut gepositioneerd en de achtergrondkleur kan niet bepaald worden. Zorg ervoor dat de contrastverhouding tussen de tekst en alle bedekte delen van de achtergond minstens {{required}}:1 is.',
      '1_4_6_G18_or_G17.BgImage':
        'De tekst van dit element werd geplaatst op een achtergrondafbeelding. Zorg ervoor dat de contrastverhouding tussen de tekst en alle bedekte delen van de achtergrondafbeelding minstens {{required}}:1 is.',
      '1_4_6_G18_or_G17.Fail':
        'Dit element heeft onvoldoende contrast op dit conformantie-niveau. Een contrastverhouding van minstens {{required]}}:1 wordt verwacht, maar de tekst in dit element heeft een contrastverhouding van {{value}}:1.',
      '1_4_6_G18_or_G17.Fail.Recomendation': 'Aanbeveling:',
      '1_4_6_G18_or_G17.Fail.Recomendation.Text': 'verander tekstkleur naar {{value}}',
      '1_4_6_G18_or_G17.Fail.Recomendation.Background': 'verander achtergrond naar{{value}}',
      '1_4_7_G56':
        'Voor voordien opgenomen pure audio-inhoud in dit element die hoofdzakelijk spraak is (zoals vertelling) dienen achtergrondgeluiden stil kunnen gezet worden, of ten minste 20 dB (of 4 maal) stiller te zijn dan de spraak.',
      '1_4_8_G148,G156,G175':
        'Controleer dat een mechanisme beschikbaar is voor de gebruiker om de voorgrond- en achtergrondkleuren van tekstblokken te kiezen, via de webpagina of via de browser.',
      '1_4_8_H87,C20':
        'Controleer of een mechanisme bestaat om de breedte van een blok tekst te beperken tot niet meer dan 80 tekens (of 40 tekens in Chineese, Japans of Koreaans schrift)',
      '1_4_8_C19,G172,G169':
        'Controleer dat tekstblokken niet vol uitgelijnd zijn - dat wil zeggen, op zowel de linker- als rechterrand - of dat een mechanisme beschikbaar is om de volle uitlijning af te zetten.',
      '1_4_8_G188,C21':
        'Controleer dat de lijnspatiëring in tekstblokken minstens 150% is in paragrafen en de spatiëring tussen paragrafen minstens 1,5 keer de lijnspatiëring, of dat een mechanisme beschikbaar is om dit te bereiken.',
      '1_4_8_H87,G146,C26':
        'Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie zonder dat de gebruiker verplicht wordt horizontaal te scrollen in een schermbreed venster.',
      '1_4_9_G140,C22,C30.NoException':
        'Controleer dat afbeeldingen van tekst enkel gebruikt worden voor zuivere decoratie of waar een specifieke weergave van tekst essentieel deel uitmaakt van de weer te geven informatie.',
      '1_4_10_C32,C31,C33,C38,SCR34,G206.Check':
        'Controleer dat de inhoud kan weergegeven worden zonder verlies van informatie of functionaliteit en zonder in twee dimensies te moeten scrollen voor: Verticaal scrollende inhoud op een breedte equivalent aan 320 CSS pixels    Horizontaal scrollende inhoud op een hoogte equivalent aan CSS pixels. Behalve voor die delen van de inhoud die een tweedimensionale opmaak vergen voor gebruik of betekenis.',
      '1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed':
        'Dit element heeft "position: fixed". Dit kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.',
      '1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling':
        'Voorgeformatteerde tekst kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.',
      '1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom':
        'Tussen beide komen in de mogelijkheid van de User Agent om uit te vergroten kan beschouwd worden als een mislukking van dit succescriterium.',
      '1_4_11_G195,G207,G18,G145,G174,F78.Check':
        'Controleer dat de visuele weergave van de volgende zaken een contrastverhouding van minstens 3:1 tegen aangrenzende kleuren:       Gebruikersinterface-onderdelen: visuele informatie vereist om gebruikersinterface-onderdelen te herkennen en hun status, behalve voor inactieve onderdelen or waar het uitzicht van het component door de User Agent bepaald wordt en niet gewijzigd is geweest door de auteur      Grafische objecten: delen van de afbeelding vereist om de inhoud te begrijpen, behalve daar waar de specifieke weergave essentieel is voor de communicatie van de informatie.     ,',
      '1_4_12_C36,C35.Check':
        'Controleer dat er geen verlies van inhoud of functionaliteit optreedt bij het instellen van de volgende eigenschappen en zonder andere stijleigenschappen te wijzigen: Lijnhoogte (lijnspatiëring) naar minstens 1,5 maal de lettergrootte Spatieing na paragrafen tot minstens 2 maal de lettergrootte Letterspatiëring (tracking) tot minstens 0,12 de lettergrootte Woordspatiëring tot minstens 0,16 maal de lettergrootte.',
      '1_4_13_F95.Check':
        'Controleer dat waar een pointer hover of toetsenbordfocus aanvullende content doet zichtbaar worden en terug verbergen, het volgende waar is:         Als de aanvullende content een deel van de andere content bedekt, moet het mogelijk zijn om de aanvullende content (zoals een tooltip) opnieuw te verbergen zonder dat de muisaanwijzer verplaatst hoeft te worden en zonder de focus van het element weg te hoeven nemen Als de aanvullende content verschijnt door een element aan te wijzen (zonder te klikken), dan mag de content niet verdwijnen als de gebruiker de muis beweegt in het gebied waarin de aanvullende content is verschenen.De aanvullende content moet zichtbaar blijven totdat de gebruiker de muisaanwijzer buiten het element plaatst, de toetsenbordfocus actief verplaatst of op Escape drukt. Ten slotte mag de aanvullende content ook automatisch verdwijnen, maar enkel wanneer de weergegeven informatie niet meer geldig is ó bijvoorbeeld wanneer gemeld wordt dat een e-mailadres niet correct is ingevuld, maar de gebruiker deze fout al heeft verbeterd.',
      '2_1_1_G90':
        'Controleer dat de functionaliteit voorzien in een eventhandler voor dit element beschikbaar is via het toetsenbord',
      '2_1_1_SCR20.DblClick':
        'Controleer dat de functionaliteit voorzien bij dubbelklikken op dit element beschikbaar is via het toetsenbord.',
      '2_1_1_SCR20.MouseOver':
        'Controleer dat de functionaliteit voorzien door een muisbeweging over dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het focus event.',
      '2_1_1_SCR20.MouseOut':
        'Controleer dat de functionaliteit voorzien door een muisbeweging uit dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het blur event.',
      '2_1_1_SCR20.MouseMove':
        'Controleer dat de functionaliteit voorzien door een muisbeweging op dit element beschikbaar is via het toetsenbord',
      '2_1_1_SCR20.MouseDown':
        'Controleer dat de functionaliteit voorzien door een muisklik - mousedown op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keydown event.',
      '2_1_1_SCR20.MouseUp':
        'Controleer dat de functionaliteit voorzien door een muisklik - mouseup op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keyup event.',
      '2_1_2_F10':
        'Controleer dat deze applet of plugin de mogelijkheid biedt om het focus weg te nemen van zichzelf via het toetsenbord.',
      '2_1_4.Check':
        'Controleer dat indien sneltoets voorzien is met maar ÈÈn letter (inclusief hoofd- en kleine letters), punctuering, getal of symboolkarakters, minstens ÈÈn van volgende stellingen waar his:         Uitzetten: Er is een mechanisme om de sneltoets af te zetten Hermappen: Er is mechanisme beschikbaar om de shortcut te hermappen om gebruik te maken van ÈÈn van de niet printbare toetsenbordkarakters (bvb. Ctrl, Alt, etc) Enkel aktief bij focus: De sneltoets voor een gebruikersinterface-onderdeel is enkel aktief als dat onderdeel het focus heeft.',
      '2_2_1_F40.2':
        'Meta refresh tag wordt gebruikt om te redirecten naar een andere pagina, met een tijdslimiet die niet nul is. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.',
      '2_2_1_F41.2':
        'Meta refresh tag wordt gebruikt om de huidige pagina te verversen. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.',
      '2_2_2_SCR33,SCR22,G187,G152,G186,G191':
        'Indien een onderdeel van de inhoud beweegt, scrollt of knippert gedurende langer dan 5 seconden, of automatisch ververst, controleer dan of er een mechanisme beschikbaar is om te pauzeren, te stoppen of de inhoud te verbergen.',
      '2_2_2_F4':
        'Controleer dat er een mechanisme beschikbaar is om dit knipperende element in minder dan vijf seconden te stoppen.',
      '2_2_2_F47':
        'Blink elementen kunnen niet voldoen aan de vereiste dat knipperende informatie gestopt kan worden binnen de vijf seconden.',
      '2_2_3_G5':
        'Controleer dat de timing geen essentieel onderdeel is van een gebeurtenis of activiteit voorgesteld door de inhoud, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.',
      '2_2_4_SCR14':
        'Controleer dat alle onderbrekingen (inclusief inhoudsverversing) uitgesteld of afgezet kunnen worden door de gebruiker, behalve onderbrekingen die betrekking hebben tot een noodgeval.',
      '2_2_5_G105,G181':
        "Indien deze webpagina deel uitmaakt van een set pagina's met een tijdslimiet op inactiviteit, controleer dan dat een geauthenticeerde gebruiker de activiteit zonder gegevensverlies kan voortzetten na herauthenticatie.",
      '2_2_6.Check':
        'Controleer dat gebruikers verwittigd werden van de duur van inactiviteit die gegevensverlies zou kunnen veroorzaken, tenzij de gegevens langer dan 20 uur bewaard worden als de gebruiker geen actie onderneemt.',
      '2_3_1_G19,G176':
        'Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde, of dat de afmeting van het flitsend gebied voldoende klein is.',
      '2_3_2_G19':
        'Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde.',
      '2_3_3.Check':
        'Controleer dat de bewegingsanimatie veroorzaakt door interacties kan uitgezet worden, tenzij deze animatie essentieel is voor de functionaliteit of de weer te geven informatie.',
      '2_4_1_H64.1':
        'Iframe element vereist een niet-leeg title attribuut dat het kader identificeert.',
      '2_4_1_H64.2':
        'Controleer dat het title attribuut van dit element tekst bevat die het kader identificeert.',
      '2_4_1_G1,G123,G124,H69':
        'Controleer dat veel voorkomende navigatie-elementen overgeslagen kunnen wordenbijvoorbeeld door gebruik van skip links, hoofding elementen of ARIA landmark rollen.',
      '2_4_1_G1,G123,G124.NoSuchID':
        'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam.',
      '2_4_1_G1,G123,G124.NoSuchIDFragment':
        'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam binnen het geteste fragment.',
      '2_4_2_H25.1.NoHeadEl':
        'Er is geen head sectie waarin een beschrijvend title element kan geplaatst worden.',
      '2_4_2_H25.1.NoTitleEl':
        'Voor dit document dient een titel voorzien te worden, door een niet-leeg title element in de head sectie te plaatsen.',
      '2_4_2_H25.1.EmptyTitle': 'Het title element in de head sectie mag niet leeg zijn.',
      '2_4_2_H25.2': 'Controleer dat het title element het document beschrijft.',
      '2_4_3_H4.2':
        'Indien tabindex gebruikt wordt, controleer dan dat de tabvolgorde gespecifieerd door de tabindex attributen de relaties in de inhoud volgt.',
      '2_4_4_H77,H78,H79,H80,H81,H33':
        'Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context, of zijn title attribuut, het doel van de link identificeert.',
      '2_4_4_H77,H78,H79,H80,H81':
        'Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context het doel van de link identificeert.',
      '2_4_5_G125,G64,G63,G161,G126,G185':
        "Indien deze webpagina geen deel uitmaakt van een lineair proces, controleer dan of er meer dan ÈÈn manier is om deze webpagina te vinden binnen een set webpagina's.",
      '2_4_6_G130,G131':
        'Controleer dat de hoofdingen en labels de inhoud en het doel beschrijven.',
      '2_4_7_G149,G165,G195,C15,SCR31':
        'Controleer dat er minstens een werkwijze is waarbij de toetsenbord focus indicator visueel teruggevonden kan worden op gebruiksinterface-besturingselementen.',
      '2_4_8_H59.1':
        'Link elementen kunnen enkel geplaatst worden in de head sectie van het document',
      '2_4_8_H59.2a':
        'Er ontbreekt een niet-leeg rel attribuut in het link element die het linktype identificeert.',
      '2_4_8_H59.2b':
        'Er ontbreekt een niet-leeg href attribuut in het link element dat wijst naar de gelinkte resource.',
      '2_4_9_H30': 'Controleer of de tekst van de link het doel van de link beschrijft.',
      '2_5_1.Check':
        'Controleer dat alle functionaliteit die multipoint of pad-gebaseerde bewegingen gebruikt voor de werking gebruiokt kan worden met ÈÈn enkele pointer zonder pad-gebaseerde bewegingen, tenzij multipoint of pad-gebaseerde bewegingen essentieel zijn.',
      '2_5_2.Mousedown_Check':
        'Dit element heeft een mousedown event listener. Controleer dat voor functinaliteit die gebruikt kan worden met ÈÈn enkele pointer, minstens ÈÈn van de volgende stellingen waar is:         Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren Afbreken of ongedaan maken: Vervollediging van deze functie is gekoppeld aan het up-avent en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om Essentieel: De functie vervolledigen op het down-event is essentieel.     ,',
      '2_5_2.Touchstart_Check':
        'Dit element heeft een touchstart event listener. Controleer dat voor functinaliteit die gebruikt kan worden met ÈÈn enkele pointer, minstens ÈÈn van de volgende stellingen waar is:         Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren Afbreken of ongedaan maken: Vervollediging van deze functie is gekoppeld aan het up-avent en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om Essentieel: De functie vervolledigen op het down-event is essentieel.     ,',
      '2_5_3_F96.Check':
        'Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.',
      '2_5_3_F96.AccessibleName':
        'De toegankelijke naam voor dit element bevat geen zichtbare label tekst.Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.',
      '2_5_4.Check':
        'Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface compoonenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.     ,',
      '2_5_4.Devicemotion':
        'Dit element heeft een devicemotion event listener. Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface compoonenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.     ,',
      '2_5_5.Check':
        'Controleer dat de afmeting van het doelwit voor pointer invoer minstens 44 op 44 CSS pixels groot is, behalve indien:         Equivalent: Het doelwit beschikbaar is door een equivalente link of besturing op dezelfde pagina die minstens 44 op 44 CSS pixels groot is Inline: Het doel een zin of een blok tekst is User Agent Beheer: De afmeting van het doelwit bepaald wordt dooe de User Agent en niet gewijzigd werd door de auteur Essentieel: Een specifieke voorstelling van het doelwit is essentieel voor de over te brengen informatie.     ,',
      '2_5_6.Check':
        'Controleer dat de inhoud het gebruik van invoermiddelen beschikbaar op een platform niet beperkt behalve indien deze beperking essentieel is, vereist om de veiligheid van de inhoud te verzekeren of gebruikersinstellingen te respecteren.',
      '3_1_1_H57.2':
        'Het html element zou een lang of xml:lang attribuut moeten bevatten dat de taal van het document beschrijft.',
      '3_1_1_H57.3.Lang':
        'De taal gespecifieerd in het lang attribuut van het document lijkt niet correct geformuleerd.',
      '3_1_1_H57.3.XmlLang':
        'De taal gespecifieerd in het xml:lang attribuut van het document lijkt niet correct geformuleerd.',
      '3_1_2_H58':
        'Controleer dat elke taalwijziging aangeduid wordt met het lang en/of xml:lang attribuut op een element, waar toepasselijk.',
      '3_1_2_H58.1.Lang':
        'De taal gespecifieerd in het lang attribuut van dit element lijkt niet correct geformuleerd.',
      '3_1_2_H58.1.XmlLang':
        'De taal gespecifieerd in het xml:lang attribuut van dit element lijkt niet correct geformuleerd.',
      '3_1_3_H40,H54,H60,G62,G70':
        'Controleer of er een mechanisme beschikbaar is voor het identificeren van specifieke definities van woorden en zinnen die in een ongebruikelijke of beperkte manier gebruikt worden, inclusief idiomen en jargon.',
      '3_1_4_G102,G55,G62,H28,G97':
        'Controleer of er een mechanisme beschikbaar is voor het identificeren van de volledige vorm of betekenis van afkortingen',
      '3_1_5_G86,G103,G79,G153,G160':
        'Waar de inhoud een leesniveau vereist dat verder gevorderd is dan lager middelbaar onderwijs, zou bijkomende inhoud of een alternatieve versie voorzien moeten worden.',
      '3_1_6_H62.1.HTML5':
        'Ruby element bevat geen rt element met uitspraakinformatie voor de body tekst.',
      '3_1_6_H62.1.XHTML11':
        'Ruby element bevat geen rt element met uitspraakinformatie voor de tekst binnen het rb element.',
      '3_1_6_H62.2':
        'Ruby element bevat geen rp element dat extra punctuering aanbiedt aan browsers die geen ruby tekst ondersteunen',
      '3_2_1_G107':
        'Controleer dat er geen contextwijziging optreedt indien de focus op dit invoerveld valt.',
      '3_2_2_H32.2':
        'Dit formulier heeft geen submit knop, wat problemen veroorzaakt voor zij die het formulier niet met het toetsenbord kunnen indienen. Submit knoppen zijn input elementen met type attribuut "submit" of "image" of button elementen met type "submit" een ongeldig of leeg type attribuut.',
      '3_2_3_G61':
        "Controleer dat navigatiemechanismes die herhaald worden op meerdere webpagina's in dezelfde volgorde voorkomen iedere keer dat ze herhaald worden, tenzij een wijziging door de gebruiker werd veroorzaakt.",
      '3_2_4_G197':
        "Controleer dat componenten met dezelfde functionaliteit binnen deze webpagina consistent geÔdentificeerd worden in de set webpagina's waartoe deze behoort.",
      '3_2_5_H83.3':
        'Controleer dat de link tekst van deze link informatie bevat die weergeeft dat deze link in een nieuw venster zal openen.',
      '3_3_1_G83,G84,G85':
        'Als een invoerfout automatisch gedetecteerd wordt in dit formulier, controleer dan dat de foute zaken geÔdentificeerd worden en de fouten als tekst aan de gebruiker worden beschreven.',
      '3_3_2_G131,G89,G184,H90':
        'Controleer of beschrijvende labels of instructies (inclusief voor verplichte velden) voorzien zijn voor gebruikersinvoer in dit formulier.',
      '3_3_3_G177':
        'Controleer of dit formulier verbeteringssuggesties doet voor fouten in gebruikersinvoer, tenzij dit de veiligheid of het doel van de inhoud in gevaar brengt.',
      '3_3_4_G98,G99,G155,G164,G168.LegalForms':
        'Indien dit formulier de gebruiker tot een financiëel of legaal engagement verplicht, gebruiker-beheerbare gegevens wijzigt of verwijdert of test-antwoorden indient, zorg er dan voor dat indiening omkeerbaar is, gecontroleerd wordt voor invoerfouten en/of bevestigd wordt door de gebruiker.',
      '3_3_5_G71,G184,G193':
        'Controleer of contextgevoelige hulp beschikbaar is voor dit formulier, op niveau van de webpagina of het besturingselement.',
      '3_3_6_G98,G99,G155,G164,G168.AllForms':
        'Controleer of indieningen voor dit formulier ofwel omkeerbaar zijn, gecontroleerd worden op invoerfouten en/of bevestigd worden door de gebruiker.',
      '4_1_1_F77': 'Duplicate id attribuutwaaarde "{{id}}" gevonden op de pagina.',
      '4_1_2_H91.A.Empty':
        'Anker element gevonden met een ID maar zonder een href of link tekst. Overweeg om de ID naar het bovenliggend of een nabijgelegen element te verhuizen.',
      '4_1_2_H91.A.EmptyWithName':
        'Anker element gevonden met een name attribuut maar zonder een href of link tekst. Overweeg om het naam attribuut als ID naar het bovenliggend of een nabijgelegen element te verhuizen.',
      '4_1_2_H91.A.EmptyNoId':
        'Anker element gevonden zonder linkinhoud en zonder name of ID attribuut.',
      '4_1_2_H91.A.NoHref':
        'Anker elementen zouden niet gebruikt mogen worden voor in-pagina linkbestemmingen. Indien de ID niet voor andere doeleinden (zoals CSS of scripting) gebruikt wordt, overweeg deze te verhuizen naar een bovenliggend element.',
      '4_1_2_H91.A.Placeholder':
        'Anker element gevonden binnen link inhoud, maar zonder dat er een href, ID of name attribuut voorzien is.',
      '4_1_2_H91.A.NoContent':
        'Anker element gevonden met een geldig href attribuut, maar zonder linkinhoud.',
      '4_1_2_input_element': 'input element',
      '4_1_2_element_content': 'elementinhoud',
      '4_1_2_element': 'element',
      '4_1_2_msg_pattern':
        'Dit {{msgNodeType}} heeft geen naam beschikbaar voor een toegankelijkheids-API. Geldige namen zijn: {{builtAttrs}}.',
      '4_1_2_msg_pattern_role_of_button':
        'Dit element heeft de rol "button" maar heeft geen naam beschikbaar voor een toegankelijkheids-API. Geldige namen zijn: {{builtAttrs}}.',
      '4_1_2_msg_pattern2':
        'Dit {{msgNodeType}} heeft geen waarde beschikbaar voor een toegankelijkheids-API.',
      '4_1_2_msg_add_one': 'Voeg ÈÈn toe door inhoud aan het element toe te voegen.',
      '4_1_2_msg_pattern3':
        'Dit {{msgNodeType}} heeft geen initieel gekozen optie. Afhankelijk van de HTML versie kan de waarde beschikbaar voor een toegankelijkheids-API "undefined" zijn.',
      '4_1_2_value_exposed_using_attribute':
        'Een waarde moet beschikbaar zijn via het {{requiredValue}} attribuut.',
      '4_1_2_value_exposed_using_element':
        'Een waarde moet beschikbaar zijn via het {{requiredValue}} element.',
      '4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check':
        'Controleer dat statusboodschappen programmatisch bepaald kunnen worden door rol of eigenschappen zodanig dat ze aan de gebruiker kunnen beschikbaar gesteld worden via hulptechnologie zonder de focus te krijgen.',
    }),
    (_global.translation.pl = {
      'auditor_name': 'Squiz HTML_CodeSniffer',
      'auditor_using_standard': 'Używany standard',
      'auditor_standards': 'Standardy',
      'auditor_code_snippet': 'Fragment kodu',
      'auditor_close': 'Zamknij',
      'auditor_select_types': 'Wybierz typy błędów, które mają być w raporcie',
      'auditor_home': 'Home',
      'auditor_view_report': 'Zobacz Raport',
      'auditor_report': 'Raport',
      'auditor_back_to_report': 'Powrót do Raportu',
      'auditor_previous_issue': 'Poprzedni Problem',
      'auditor_next_issue': 'Następny Problem',
      'auditor_issue': 'Problem',
      'auditor_of': 'z',
      'auditor_errors': 'Błędy',
      'auditor_error': 'Błąd',
      'auditor_warnings': 'Ostrzeżenia',
      'auditor_warning': 'Ostrzeżenie',
      'auditor_notices': 'Uwagi',
      'auditor_notice': 'Uwaga',
      'auditor_toggle_display_of': 'Przełącz wyświetlanie',
      'auditor_messages': 'komunikatów',
      'auditor_unable_to_point': 'Nie można wskazać elementu powiązanego z tym kryterium.',
      'auditor_unable_to_point_entire':
        'Nie można wskazać tego problemu, ponieważ dotyczy on całego dokumentu.',
      'auditor_unable_to_point_removed':
        'Nie można wskazać tego elementu, ponieważ został on usunięty z dokumentu od momentu wygenerowania raportu.',
      'auditor_unable_to_point_outside':
        'Nie można wskazać tego elementu, ponieważ znajduje się poza elementem treści dokumentu.',
      'auditor_unable_to_point_hidden':
        'Nie można wskazać tego elementu, ponieważ jest on niewidoczny lub nie ma reprezentacji wizualnej.',
      'auditor_point_to_element': 'Pokaż element',
      'auditor_unsupported_browser': 'Funkcja nie jest obsługiwana w tej przeglądarce.',
      'auditor_page': 'Strona',
      'auditor_updated_to': 'HTML_CodeSniffer został zaktualizowany do wersji',
      'auditor_view_the_changelog': 'Zobacz dziennik zmian',
      'auditor_success_criterion': 'Kryteria sukcesu',
      'auditor_suggested_techniques': 'Sugerowane techniki',
      'auditor_applies_entire_document': 'Dotyczy to całego dokumentu',
      '1_1_1_H30.2':
        'Grafika jest jedyną treścią linku i powinna zostać uzupełniona o opis alternatywny opisujący jego funkcję.',
      '1_1_1_H67.1':
        'Grafika pełni funkcję dekoracyjną zarówno atrybut alt jak i title powinny być puste.',
      '1_1_1_H67.2':
        'Grafika jest oznaczona jako dekoracyjna i będzie ignorowana przez technologie wspomagające np. czytniki ekranu dla osób niewidomych.',
      '1_1_1_H37':
        'Znacznik <img> nie ma atrybutu alt. Dodaj ten atrybut i wpisz do niego krótki opis grafiki.',
      '1_1_1_G94.Image':
        'Upewnij się, że opis alternatywny grafiki przekazuje tę samą informację, co sama grafika.',
      '1_1_1_H36':
        'Przycisk graficzny nie ma atrybutu alt. Dodaj do przycisku atrybut alt i opisz w nim funkcję przycisku.',
      '1_1_1_G94.Button':
        'Upewnij się, że opis alternatywny przycisku prawidłowo opisuje funkcję przycisku.',
      '1_1_1_H24':
        'Element <area> w mapie obrazkowej nie ma atrybutu alt. Każdy taki obszar powinien mieć atrybut alt z opisem alternatywnym, który odpowiednio opisuje dany obszar.',
      '1_1_1_H24.2':
        'Upewnij się, że opis alternatywny obszaru <area> odpowiada jego funkcji lub treści.',
      '1_1_1_G73,G74':
        'Jeśli krótki opis alternatywny nie opisuje wystarczająco treści prezentowanej przez grafikę, dodaj rozszerzony opis bezpośrednio na stronie lub na oddzielnej stronie.',
      '1_1_1_H2.EG5':
        'Opis alternatywny elementu <img> umieszczonego wewnątrz linku, nie może być taki sam jak tekst samego linku.',
      '1_1_1_H2.EG4':
        'Element <img> znajdujący się wewnątrz linku nie ma atrybutu alt lub alt jest pusty. Ponieważ w sąsiedztwie znajduje się link tekstowy zaleca się połączenie tych elementów w jedno łącze ze wspólnym opisem.',
      '1_1_1_H2.EG3':
        'Element <img> znajdujący się wewnątrz linku nie może mieć opisu alternatywnego tej samej treści, co link tekstowy znajdujący się w jego sąsiedztwie.',
      '1_1_1_H53,ARIA6':
        'Element <object> musi zawierać atrybut alt z wprowadzonym opisem alternatywnym o ile nie została zapewniony żaden inny alternatywny opis tego elementu.',
      '1_1_1_G94,G92.Object,ARIA6':
        'Należy sprawdzić czy krótkie lub długie teksty alternatywne są dostępne dla wszystkich elementów nietekstowych i możliwie najdokładniej je opisują.',
      '1_1_1_H35.3':
        '<applet> powinien zawierać opis alternatywny wewnątrz znaczników <object>. Zapewni to alternatywę w przeglądarkach, które nie obsługują elementu <applet>.',
      '1_1_1_H35.2':
        'Applet powinien mieć opis alternatywny w atrybucie alt, aby zapewnić wsparcie w przypadku problemów z załadowaniem zawartości.',
      '1_1_1_G94,G92.Applet':
        'Należy sprawdzić czy krótkie lub długie teksty alternatywne są dostępne dla wszystkich elementów nietekstowych i możliwie najdokładniej je opisują.',
      '1_2_1_G158':
        'Treść przedstawiona w sposób dźwiękowy powinna zostać uzupełniona dodatkową transkrypcją lub opisem alternatywnym.',
      '1_2_1_G159,G166':
        'Jeśli obiekt wideo (bez dźwięku) zamieszczony na stronie nie jest alternatywą dla tekstu, sprawdź czy istnieje do niego alternatywa tekstowa lub ścieżka dźwiękowa prezentująca tę samą treść.',
      '1_2_2_G87,G93':
        'Jeśli obiekt wideo ze ścieżką audio nie jest alternatywą dla tekstu, sprawdź czy materiał ma napisy dla niesłyszących.',
      '1_2_3_G69,G78,G173,G8':
        'Jeśli obiekt wideo ze ścieżką audio nie jest alternatywą dla tekstu, sprawdź czy materiał zawiera dodatkowo audiodeskrypcję obrazu i/lub opis alternatywny dla treści przedstawionych wyłącznie w formie obrazu.',
      '1_2_4_G9,G87,G93':
        'Sprawdź czy materiał wideo prezentowany na żywo ma napisy dla niesłyszących tworzone na żywo.',
      '1_2_5_G78,G173,G8': 'Sprawdź czy materiał wideo ma dołączoną audiodeskrypcję obrazu.',
      '1_2_6_G54,G81': 'Sprawdź czy materiał wideo ma dołączone tłumaczenie na język migowy.',
      '1_2_7_G8':
        'Jeśli materiał wideo, nie ma wystarczających pauz, by uzupełnić go o audiodeskrypcję, sprawdź czy zamieszczona jest alternatywna wersja lub rozszerzona ścieżka dźwiękowa.',
      '1_2_8_G69,G159':
        'Sprawdź czy materiał wideo lub wideo (sam obraz) jest umieszczony wraz z alternatywą tekstową.',
      '1_2_9_G150,G151,G157':
        'Sprawdź czy material audio przekazywany na żywo jest umieszczony wraz z wersją tekstową tworzoną na żywo.',
      '1_3_1_F92,ARIA4':
        'Ten element ma przypisaną rolę "prezentacja" ale zawiera też konkretne treści.',
      '1_3_1_H44.NonExistent':
        'Atrybut "for" znacznika <label> zawiera identyfikator pola, które nie istnieje na stronie.',
      '1_3_1_H44.NonExistentFragment':
        'Atrybut "for" znacznika <label> zawiera identyfikator pola, które nie istnieje w tym obszarze strony.',
      '1_3_1_H44.NotFormControl':
        'Atrybut "for" znacznika <label> zawiera identyfikator, który jest przypisany do elementu nie będącego elementem formulrza. Sprawdź czy identyfikator został umieszczony w odpowiednim znaczniku.',
      '1_3_1_H65':
        'Element formularza zawiera atrybut "title" bez treści lub z samymi spacjami / odstępami. Taki title nie będzie uwzględniany jako prawidłowa etykieta.',
      '1_3_1_ARIA6':
        'To pole formularza ma atrybut "aria-label" bez treści lub z samymi spacjami / odstępami. Taki atrybut nie będzie uwzględniany jako prawidłowa etykieta.',
      '1_3_1_ARIA16,ARIA9':
        'To pole formularza ma atrybut "aria-labelledby. Jednak jego ID "{{id}}" nie istnieje w żadnym elemencie. Taki atrybut nie będzie uwzględniany jako opis pola.',
      '1_3_1_F68.Hidden':
        'To ukryte pole ma etykietę (opis). Nie ma potrzeby dodawania etykiety do ukrytego pola.',
      '1_3_1_F68.HiddenAttr':
        'To pole ma z zasady być ukryte (za pomocą atrybutu "hidden"). Nie ma potrzeby dodawania etykiety do ukrytego pola.',
      '1_3_1_F68':
        'Pole formularza powinno posiadać opis bądź etykietę. Zaleca się dodanie atrybutów "title", "aria-label" lub "aria-labelledby" bądź  elementu label (z atrybutem "for" wskajuącym na to pole) .',
      '1_3_1_H49.': 'Znaczniki prezentacyjne użyte w kodzie są przestarzałe w HTML5.',
      '1_3_1_H49.AlignAttr': 'Align attributes.',
      '1_3_1_H49.Semantic': 'Do wyróżnienia tekstu powinny zostać użyte odpowiednie znaczniki.',
      '1_3_1_H49.AlignAttr.Semantic':
        'Do wyróżnienia tekstu powinny zostać użyte odpowiednie znaczniki.',
      '1_3_1_H42':
        'Jeśli ten fragment treści miał być nagłówkiem, powinny zostać użyte znaczniki nagłówków (h1 – h6).',
      '1_3_1_H63.3':
        'W komórce tabeli użyto niewłaściwy atrybut "scope". Dopuszczalne atrybuty to: "ow", "col", "rowgroup" i "colgroup".',
      '1_3_1_H63.2':
        'Atrybuty scope używane na komórkach tabeli (<td>) aby oznaczyć nagłówek są przestarzałe w HTML5. Zaleca się skorzystanie ze znacznika <th>.',
      '1_3_1_H43.ScopeAmbiguous':
        'Użycie atrybutów scope na elementach th jest niejasne w tabeli z wieloma nagłówkami. Rekomenduje się użycie atrybutu "headers" w znaczniku <td>.',
      '1_3_1_H43.IncorrectAttr':
        'Nieprawidłowy atrybut nagłówka w znaczniku <td>. Zamiast "{{actual}}" powinien być "{{expected}}".',
      '1_3_1_H43.HeadersRequired':
        'Nie zdefiniowano relacji pomiędzy komórką <td> a powiązanym z nią nagłówkiem <th>. Wskazana tabela ma wiele poziomów <th>, zatem należałoby użyć atrybutu "headers" w komórkach <td>.',
      '1_3_1_H43.MissingHeaderIds':
        'Nie wszystkie nagłówki th w tej tabeli posiadają atrybut "id" i nie będzie się można do nich odwołać za pomocą atrybutu "headers" w znacznikach <td>.',
      '1_3_1_H43.MissingHeadersAttrs':
        'Nie wszystkie komórki <td> w tej tabeli posiadają atrybut headers. W atrybucie headers powinny znajdować się identyfikatory powiązanych nagłówków.',
      '1_3_1_H43,H63':
        'Komórki <td> nie mają ustalonej relacji z komórkami nagłówkowymi <th>. Należy zdefiniować atryb "scope" dla <th> lub "headers" dla <td>.',
      '1_3_1_H63.1':
        'Nie wszystkie komórki <th> w tej tabeli posiadają atrybut "scope". Ten atrybut pozwala powiązać nagłówki <th> z odpowiednimi komórkami <td>.',
      '1_3_1_H73.3.LayoutTable':
        'Tabela jest prawdopodobnie używana do struktury układu graficznego ale zawiera atrybut summary. Tabele używane do budowania struktury strony nie mieć tego atrybutu.',
      '1_3_1_H39,H73.4':
        'Jeśli tabela zawiera treści i zastosowano w niej atrybut "summary" i znacznik <caption>. Treści tego atrybutu i znacznika nie mogą być powielone.',
      '1_3_1_H73.3.Check':
        'Jeśli ta tabela zawiera dane, sprawdź czy atrybut "summary" opisuje układ tabeli oraz wyjaśnia jak jej użyć.',
      '1_3_1_H73.3.NoSummary':
        'Jeśli ta tabela zawiera dane, rozważ użycie atrybutu "summary" jako podsumowania zawartości tabeli.',
      '1_3_1_H39.3.LayoutTable':
        'Ta tabela wydaje się być przeznaczona do prezentacji układu strony, ale zawiera opis <caption>. Tabele przeznaczone do układu nie mogą zawierać opisu.',
      '1_3_1_H39.3.Check':
        'Jeśli ta tabela zawiera dane, sprawdź czy <caption> zawiera jej adekwatny opis.',
      '1_3_1_H39.3.NoCaption':
        'Jeśli ta tabela zawiera dane, powinna być uzupełniona o opis w znaczniku <caption>.',
      '1_3_1_H71.NoLegend':
        'Fieldset nie ma opisu w formie <legend>. Wszystkim znacznikom <fieldset> powinny towarzyszyć opisy w znaczniku <legend>.',
      '1_3_1_H85.2':
        'Jeśli listy wyboru stanowią grupę, powinny być zgrupowane elementem <optgroup>.',
      '1_3_1_H71.SameName':
        'Jeśli te pola "checkbox" i "radio" są powiązane, powinny być zgrupowane znacznikiem <fieldset>.',
      '1_3_1_H48.1':
        'Treść przypomina listę nieuporządkowaną. Jeśli jest to lista nieuporządkowana powinna być oznaczona odpowiednimi znacznikami <ul>.',
      '1_3_1_H48.2':
        'Treść przypomina listę uporządkowaną. Jeśli jest to lista uporządkowana powinna być oznaczona odpowiednimi znacznikami <ol>.',
      '1_3_1_G141_a':
        'Kolejność nagłówków nie jest poprawnie uporządkowana. Element h{{headingNum}} umieszczony jest jako pierwszy więc powinien być oznaczony jako h1.',
      '1_3_1_G141_b':
        'Kolejność nagłówków nie jest poprawnie uporządkowana. Nagłówek h{{headingNum}} powinien być oznaczony jako h{{properHeadingNum}}.',
      '1_3_1_H42.2':
        'Nagłówek nie posiada tekstu. Tekst, który nie ma funkcji nagłówka nie powinien być oznaczony znacznikami do określania nagłówków.',
      '1_3_1_H48':
        'Jeśli ten element zawiera nawigację, zaleca się aby został oznaczony jako lista np. przy użyciu listy nieuporządkowanej <ul>.',
      '1_3_1_LayoutTable':
        'Ta tabela wydaje się być przeznaczona do prezentacji układu strony. Jeśli jest inaczej, powinna zawierać nagłówki pod postacią <th>.',
      '1_3_1_DataTable':
        'Jeżeli tabela jest wykorzystywana do tworzenia układu strony, nie powinna posiadać komórek <th> oraz atrybutu "summary" ani znacznika z opisem <caption>.',
      '1_3_2_G57': 'Struktura i ułożenie elementów powinny oddawać sens strony i informacji.',
      '1_3_3_G96':
        'Sprawdź czy przekazane instrukcje nie opierają się tylko na właściwościach postrzegalnych przez zmysły takich jak kształt, wielkość czy umiejscowienie.',
      '1_4_1_G14,G18':
        'Informacje przekazywane za pomocą kolorów powinny być również zapisywane w treści lub mieć inną postać alternatywną.',
      '1_4_2_F23':
        'Jeżeli materiał audo włączany jest automatycznie i trwa dłużej niż trzy sekundy należy umożliwić zatrzymanie bądź wyciszenie odtwarzania.',
      '1_4_3_F24.BGColour':
        'Sprawdź czy kolor tekstu odpowiada pod względem wymagań kontrastu kolorowi lub obrazkowi tła.',
      '1_4_3_F24.FGColour':
        'Sprawdź czy kolor elementu ma taki kolor tła lub w formie obrazka, który pasuje kontrastowo do elementu inline z tekstem.',
      '1_4_3_G18_or_G145.Abs':
        'Ten element jest pozycjonowany absolutnie i nie jest możliwe zweryfikowanie jego kontrastu. Sprawdź samodzielnie czy kontrast jest na wystarczającym poziomie: {{required}}:1.',
      '1_4_3_G18_or_G145.BgImage':
        'Tekst elementu wyświetlany jest na obrazku. Należy upewnić się, że stosunek kontrastu tekstu do tła wynosi co najmniej {{required}}:1.',
      '1_4_3_G18_or_G145.Alpha':
        'Tekst lub tło tego elementu jest przezroczyste. Upewnij się, że współczynnik kontrastu między tekstem a tłem wynosi co najmniej {{required}}:1.',
      '1_4_3_G18_or_G145.Fail':
        'Ten element ma niewystarczający na tym poziomie zgodności stosunek kontrastu tekstu do tła. Powinien wynosić co najmniej {{required}}:1, a tekst umieszczony w tym elemencie posiada stosunek {{value}}:1.',
      '1_4_3_G18_or_G145.Fail.Recomendation': 'Zalecenie: ',
      '1_4_3_G18_or_G145.Fail.Recomendation.Text': 'zmiana koloru tekstu na {{value}}',
      '1_4_3_G18_or_G145.Fail.Recomendation.Background': 'zmiana koloru tła na {{value}}',
      '1_4_4_G142':
        'Należy upewnić się, że tekst na stronie może być powiększony do 200% bez użycia technologii wspomagających.',
      '1_4_5_G140,C22,C30.AALevel':
        'Sprawdź czy stosowane technologie pozwalają na użycie tekstu w graficznej formie. Treść powinna być przekazana w formie tekstu, chyba że graficzna forma tekstu jest istotna z punktu widzenia samej informacji, która jest przekazywana.',
      '1_4_6_G18_or_G17.Abs':
        'Ten element jest pozycjonowany absolutnie i nie jest możliwe zweryfikowanie jego kontrastu. Sprawdź samodzielnie czy kontrast jest na wystarczającym poziomie: {{required}}:1.',
      '1_4_6_G18_or_G17.BgImage':
        'Tekst elementu wyświetlany jest na obrazku. Należy upewnić się, że stosunek kontrastu tekstu do tła wynosi conajmniej {{required}}:1.',
      '1_4_6_G18_or_G17.Fail':
        'Ten element ma niewystarczający stosunek kontrastu tekstu do tła. Powinien wynosić co najmniej {{required}}:1, a tekst umieszczony w tym elemencie posiada stosunek {{value}}:1.',
      '1_4_6_G18_or_G17.Fail.Recomendation': 'Zalecenie: ',
      '1_4_6_G18_or_G17.Fail.Recomendation.Text': 'zmiana koloru tekstu na {{value}}',
      '1_4_6_G18_or_G17.Fail.Recomendation.Background': 'zmiana koloru tła na {{value}}',
      '1_4_7_G56':
        'Materiał audio, w którym występuje głównie mowa powinien mieć możliwość wyciszenia dźwięków tła lub narracja powinna być przynajmniej o 4 razy(20dB) głośniejsza niż tło.',
      '1_4_8_G148,G156,G175':
        'Kolor tekstu oraz kolor tła powinny być możliwe do zmiany przez użytkownika na samej stronie lub poprzez funkcje przeglądarki. ',
      '1_4_8_H87,C20':
        'Szerokość bloku tekstowego nie powinna przekraczać 80 znaków (40 w przypadku alfabetów: chińskiego, japońskiego i koreańskiego).',
      '1_4_8_C19,G172,G169':
        'Tekst nie powinien być wyjustowany (tzn. wyrównany do prawego i lewego marginesu). Ewentualnie powinien istnieć mechanizm, który pozwala usunąć wyjustowanie.',
      '1_4_8_G188,C21':
        'Odstępy między wierszami w akapitach powinny wynosić  przynajmniej 1,5 wysokości linii, a odległość między akapitami powinna być przynajmniej 1,5 razy większa niż ta pomiędzy wierszami. ',
      '1_4_8_H87,G146,C26':
        'Tekst na stronie powinien mieć możliwość powiększenia do 200% bez użycia technologii wspomagających. Nie powinno być też wymagane scrollowanie dolnym paskiem ekranu przy takim ustawieniu i zmaksymalizowanym oknie przeglądarki.',
      '1_4_9_G140,C22,C30.NoException':
        'Sprawdź czy teksty w formie grafiki pełnią wyłącznie funkcję dekoracyjną lub „graficzna” prezentacja tekstu ma znaczenie z uwagi na treść przekazywanej informacji.',
      '2_1_1_G90':
        'Cała treść oraz wszystkie zawarte w niej funkcjonalności powinny być dostępne przy użyciu klawiatury.',
      '2_1_1_SCR20.DblClick':
        'Funkcjonalność dostępna po dwukrotnym kliknięciu przyciskiem myszy, również powinna być dostępna przy użyciu klawiatury.',
      '2_1_1_SCR20.MouseOver':
        'Funkcjonalność dostępna po najechaniu kursorem myszy na element, również powinna być dostępna przy użyciu klawiatury.',
      '2_1_1_SCR20.MouseOut':
        'Funkcjonalność dostępna po opuszczeniu kursorem myszy elementu, również powinna być dostępna przy użyciu klawiatury.',
      '2_1_1_SCR20.MouseMove':
        'Funkcjonalność dostępna z wykorzystaniem ruchów myszą, również powinna być dostępna przy użyciu klawiatury.',
      '2_1_1_SCR20.MouseDown':
        'Funkcjonalność dostępna po wciśnięciu przycisku myszy, również powinna być dostępna przy użyciu klawiatury.',
      '2_1_1_SCR20.MouseUp':
        'Funkcjonalność dostępna po zwolnieniu przycisku myszy, również powinna być dostępna przy użyciu klawiatury.',
      '2_1_2_F10':
        'Sprawdź czy plugin lub applet pozwalają na uwolnienie fokusu, jeśli przejdzie on do tych funkcjonalności.',
      '2_2_1_F40.2':
        'Tag <meta> z atrybutem "redirect" przekierowuje na inną stronę w czesie określonym jako 0. Użytkownicy nie mają kontroli w taki krótkim czasie.',
      '2_2_1_F41.2':
        'Tag <meta> z atrybutem "refresh" odświeża aktualną stronę. Użytkownicy nie mają kontroli nad tym odświeżaniem.',
      '2_2_2_SCR33,SCR22,G187,G152,G186,G191':
        'Jeśli na stronie znajduje się element dynamiczny, animujący się dłużej niż 5 sekund powinien być mechanizm umożliwiający zatrzymanie tego efektu.',
      '2_2_2_F4':
        'Jeśli element miga dłużej niż 5 sekund powinien być mechanizm, który umożliwi zatrzymanie migania.',
      '2_2_2_F47':
        'Element <blink> nie spełnia wymagania o zatrzymaniu się migania w czasie 5 sekund.',
      '2_2_3_G5':
        'Sprawdź czy w serwisie nie występują ograniczenia czasowe, w działaniach użytkownika, chyba że dotyczy to odtwarzania plików multimedialnych lub działań transmitowanych na żywo.',
      '2_2_4_SCR14':
        'Sprawdź czy wszelkie przerwy lub przeszkody (np. automatyczna aktualizacja treści), mogą być wyłączone lub opóźnione przez użytkownika — chyba, że dotyczy to nagłych przypadków.',
      '2_2_5_G105,G181':
        'Jeśli użytkownik zostanie wylogowany w trakcie procesu (np. krokowego), powinien mieć możliwość do powrotu do tego samego stanu procesu, w jakim był wcześniej.',
      '2_3_1_G19,G176':
        'Elementy strony nie mogą błyskać częściej niż trzy razy w ciągu sekundy oraz jednocześnie obszar migający jest jak najmniejszy.',
      '2_3_2_G19': 'Elementy strony nie mogą migać częściej niż trzy razy w ciągu sekundy.',
      '2_4_1_H64.1':
        'Ramka <iframe> musi posiadać tytuł. Należy wypełnić atrybut "title" i zawrzeć w nim opis ramki.',
      '2_4_1_H64.2':
        'Tytuł ramki <iframe> powinień opisywać ją w możliwie najdokładniejszy sposób.',
      '2_4_1_G1,G123,G124,H69':
        'Sprawdź czy użytkownik może pominąć powtarzającą się nawigację. Można to zapewnić przez użycie skip-linków, nagłówków lub punktów orientacyjnych ARIA.',
      '2_4_1_G1,G123,G124.NoSuchID':
        'Ten link wskazuje identyfikator {{id}} ale takiego identyfikatora w dokumencie nie ma.',
      '2_4_1_G1,G123,G124.NoSuchIDFragment':
        'Ten link wskazuje identyfikator {{id}} w dokumencie, ale takiego identyfikatora w testowanym obszarze nie ma.',
      '2_4_2_H25.1.NoHeadEl':
        'Strona nie ma tytułu. Należy dodać znacznik <title> do sekcji nagłówkowej strony.',
      '2_4_2_H25.1.NoTitleEl':
        'Strona nie ma tytułu. Należy dodać znacznik <title> do sekcji nagłówkowej strony lub wypełnić jego treść.',
      '2_4_2_H25.1.EmptyTitle':
        'Znacznik <title> w sekcji nagłówkowej strony nie powinien być pusty.',
      '2_4_2_H25.2':
        'Znacznik <title> w sekcji nagłówkowej strony powinien możliwie najdokładniej opisywać jej zawartość.',
      '2_4_3_H4.2':
        'Jeśli został użyty atrybut "tabindex", relacje i następstwo treści są zrozumiałe dla użytkownika.',
      '2_4_4_H77,H78,H79,H80,H81,H33':
        'Sprawdź czy treść linku wraz z kontekstem, w którym występuje lub dodatkową treścią w atrybucie "title" pozwala na zrozumienie funkcji / celu linku.',
      '2_4_4_H77,H78,H79,H80,H81':
        'Sprawdź czy treść linku wraz z kontekstem, w którym występuje pozwala na zrozumienie funkcji / celu linku.',
      '2_4_5_G125,G64,G63,G161,G126,G185':
        'Jeśli strona nie jest częścią procesu krokowego, sprawdź czy jest więcej niż jeden sposób na dotarcie do tej strony.',
      '2_4_6_G130,G131': 'Nagłówki i etykiety powinny opisywać temat i/lub cel treści.',
      '2_4_7_G149,G165,G195,C15,SCR31':
        'Każdy element możliwy do nawigacji za pomocą klawiatury, ma widoczny wskaźnik fokusu klawiatury.',
      '2_4_8_H59.1': 'Znacznik <link> może być umieszczony wyłącznie w sekcji <head>.',
      '2_4_8_H59.2a':
        'Znacznik <link> nie ma atrybutu "rel", którego wartość wskazuje na typ i powiązanie linku.',
      '2_4_8_H59.2b':
        'Znacznik <link> nie ma adresu w atrybucie "href" — nie prowadzi do żadnego zasobu.',
      '2_4_9_H30': 'Sprawdź czy treść linku zrozumiale opisuje jego funkcję.',
      '3_1_1_H57.2': 'Znacznik <html> musi posiadać atrybut "lang" określający język strony.',
      '3_1_1_H57.3.Lang':
        'Język zdefiniowany w atrybucie "lang" nie mógł zostać poprawnie zinterpretowany.',
      '3_1_1_H57.3.XmlLang':
        'Język zdefiniowany w atrybucie "xml:lang" nie mógł zostać poprawnie zinterpretowany. ',
      '3_1_2_H58':
        'Każda zmiana języka w treściach strony powinna być oznaczona atrybutem "lang" lub "xml:lang".',
      '3_1_2_H58.1.Lang':
        'Język zdefiniowany w atrybucie "lang" tego elementu nie mógł zostać poprawnie zinterpretowany.',
      '3_1_2_H58.1.XmlLang':
        'Język zdefiniowany w atrybucie "xml:lang" tego elementu nie mógł zostać poprawnie zinterpretowany.',
      '3_1_3_H40,H54,H60,G62,G70':
        'Sprawdź czy jest zapewniony mechanizm, za pomocą którego można sprawdzić definicje słów użytych w nietypowy sposób, co odnosi się też do idiomów i żargonu.',
      '3_1_4_G102,G55,G62,H28,G97':
        'Sprawdź czy jest zapewniony mechanizm, za pomocą którego można sprawdzić znaczenie skrótów w ich rozwiniętej formie.',
      '3_1_5_G86,G103,G79,G153,G160':
        'Jeśli dany tekst wymaga umiejętności czytania na poziomie wyższym niż poziom gimnazjalny, powinna być dostępna jego dodatkowa, uproszczona wersja.',
      '3_1_6_H62.1.HTML5':
        'Element <ruby> nie zawiera znacznika znacznika <rt>, który opisuje sposób wymowy.',
      '3_1_6_H62.1.XHTML11':
        'Element <ruby> nie zawiera znacznika <rt>, który opisuje sposób wymowy treści umieszczonej wewnątrz znacznika <rb>.',
      '3_1_6_H62.2':
        'Element <ruby> nie zawiera znacznika <rp>, który zapewnia wsparcie dla przeglądarek niewspierających treści w znacznikach <ruby>.',
      '3_2_1_G107':
        'Sprawdź czy po przenieseniu fokusu na dany element formularza nie następuje zaskakująca dla użytkownika zmiana kontekstu (np. przeniesienie na inną stronę).',
      '3_2_2_H32.2':
        'Formularz nie ma przycisku do zatwierdzania wysyłki. Może to sprawić problem użytkownikom posługującym się wyłącznie klawiaturą. Przycisk może mieć formę elementu <input> z atrybutem "submit" lub "image" lub elementem <button>.',
      '3_2_3_G61':
        'Sprawdź czy powtarzające się na stronach elementy nawigacyjne są umieszczone w tej samej kolejności. Dopuszczalne jest zmiana kolejności przez samego użytkownika.',
      '3_2_4_G197':
        'Elementy, które posiadają tę samą funkcjonalność, muszą być zidentyfikowane/oznaczone w ten sam sposób na wszystkich stronach serwisu.',
      '3_2_5_H83.3':
        'Linki otwierające się w nowym oknie lub karcie przeglądarki powinny mieć taką informację w swojej treści.',
      '3_3_1_G83,G84,G85':
        'Jeśli przy wpisywaniu informacji, błąd zostanie wykryty automatycznie, system powinien wskazać błędny element, a użytkownik otrzymać opis błędu w postaci tekstu.',
      '3_3_2_G131,G89,G184,H90':
        'Jeżeli wymagane jest wprowadzenie treści przez użytkownika, powinny być dostępne zrozumiałe instrukcje i wskazówki.',
      '3_3_3_G177':
        'Jeśli przy wpisywaniu informacji błąd zostanie wykryty automatycznie, użytkownik powinien otrzymać sugestię korekty, chyba że wpłynie to negatywnie na bezpieczeństwo systemu.',
      '3_3_4_G98,G99,G155,G164,G168.LegalForms':
        'Sprawdź czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie. Jest to szczególnie ważne w sytuacji, gdy użytkownik podaje informacje prawne lub finansowe.',
      '3_3_5_G71,G184,G193':
        'Sprawdź czy w formularzu jest dostępna pomoc kontekstowa na samej stronie lub na stronie służącej do potwierdzenia wprowadzonych treści.',
      '3_3_6_G98,G99,G155,G164,G168.AllForms':
        'Sprawdź czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie.',
      '4_1_1_F77':
        'Na stronie znaleziono powieloną wartość "{{id}}". Dopuszczalne jest jedno wystąpienie wartości identyfikatora.',
      '4_1_2_H91.A.Empty':
        'Link ma atrybut "id", nie ma jednak ani adresu w atrybucie "href" ani treści. Rozważ przeniesienie identyfikatora do elementu nadrzędnego.',
      '4_1_2_H91.A.EmptyWithName':
        'Link ma atrybut "name", ale nie ma ani adresu ani treści. Rozważ przeniesienie wartości atrybutu "name" do identyfikatora elementu nadrzędnego jako "id".',
      '4_1_2_H91.A.EmptyNoId': 'Link nie ma treści, ani nazwy ani identyfikatora.',
      '4_1_2_H91.A.NoHref':
        'Link nie powinien być używany do tworzenia wewnętrznych odniesień na stronie. Jeśli identyfikator jest używany do styli CSS lub oskryptowania JS, rozważ przeniesienie identyfikatora od elementu nadrzędnego (rodzica).',
      '4_1_2_H91.A.Placeholder':
        'Link ma jedynie treść. Brakuje adresu w atrybucie "href", identyfikatora ani nazwy (atrybutu "name").',
      '4_1_2_H91.A.NoContent':
        'Link ma prawidłowy adres w atrybucie "href" ale nie ma treści linku.',
      '4_1_2_input_element': 'pole formularza',
      '4_1_2_element_content': 'zawartość elementu',
      '4_1_2_element': 'element',
      '4_1_2_msg_pattern':
        '{{msgNodeType}} nie posiada prawidłowej nazwy (np. atrybutu) dla "accessibility API". Dopuszczalne opcje to: {{builtAttrs}}',
      '4_1_2_msg_pattern_role_of_button':
        'element ma rolę "button" ale nie posiada prawidłowej nazwy (np. atrybutu) dla "accessibility API". Dopuszczalne opcje to: {{builtAttrs}}',
      '4_1_2_msg_pattern2':
        '{{msgNodeType}} nie ma wartości, która mogłaby być dostępna dla "accessibility API".',
      '4_1_2_msg_add_one': 'Add one by adding content to the element.',
      '4_1_2_msg_pattern3':
        'This {{msgNodeType}} does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.',
      '4_1_2_value_exposed_using_attribute':
        'A value is exposed using the {{requiredValue}} attribute.',
      '4_1_2_value_exposed_using_element':
        'A value is exposed using the {{requiredValue}} element.',
    }),
    (_global.HTMLCS_Section508 = {
      name: 'Section508',
      description: 'U.S. Section 508 Standard',
      sniffs: ['A', 'B', 'C', 'D', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
      getMsgInfo: function (e) {
        return [['Section', '1194.22 (' + e.split('.', 3)[1].toLowerCase() + ')']]
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_A = {
      register: function () {
        return ['_top', 'img', 'object', 'bgsound', 'audio']
      },
      process: function (e, t) {
        if (e === t) this.addNullAltTextResults(t), this.addMediaAlternativesResults(t)
        else {
          var n = e.nodeName.toLowerCase()
          ;('object' !== n && 'bgsound' !== n && 'audio' !== n) ||
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              'For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.',
              'Audio'
            )
        }
      },
      testNullAltText: function (e) {
        var t = {
          img: {
            generalAlt: [],
            missingAlt: [],
            ignored: [],
            nullAltWithTitle: [],
            emptyAltInLink: [],
          },
          inputImage: { generalAlt: [], missingAlt: [] },
          area: { generalAlt: [], missingAlt: [] },
        }
        elements = HTMLCS.util.getAllElements(e, 'img, area, input[type="image"]')
        for (var n = 0; n < elements.length; n++) {
          var i = elements[n],
            a = i.nodeName.toLowerCase(),
            o = !1,
            r = !1,
            s = !1
          if ('a' === i.parentNode.nodeName.toLowerCase()) {
            var l = HTMLCS.util.getPreviousSiblingElement(i, null),
              d = HTMLCS.util.getNextSiblingElement(i, null)
            if (null === l && null === d) {
              var u = i.parentNode.textContent
              if (void 0 !== i.parentNode.textContent) u = i.parentNode.textContent
              else u = i.parentNode.innerText
              !0 === HTMLCS.util.isStringEmpty(u) && (o = !0)
            }
          }
          switch (
            (!1 === i.hasAttribute('alt')
              ? (r = !0)
              : (i.getAttribute('alt') &&
                  !0 !== HTMLCS.util.isStringEmpty(i.getAttribute('alt'))) ||
                (s = !0),
            a)
          ) {
            case 'img':
              !0 !== o || (!0 !== r && !0 !== s)
                ? !0 === r
                  ? t.img.missingAlt.push(i)
                  : !0 === s
                    ? !0 === i.hasAttribute('title') &&
                      !1 === HTMLCS.util.isStringEmpty(i.getAttribute('title'))
                      ? t.img.nullAltWithTitle.push(i)
                      : t.img.ignored.push(i)
                    : t.img.generalAlt.push(i)
                : t.img.emptyAltInLink.push(i.parentNode)
              break
            case 'input':
              !0 === r || !0 === s
                ? t.inputImage.missingAlt.push(i)
                : t.inputImage.generalAlt.push(i)
              break
            case 'area':
              !0 === r || !0 === s ? t.area.missingAlt.push(i) : t.inputImage.generalAlt.push(i)
          }
        }
        return t
      },
      addNullAltTextResults: function (e) {
        for (var t = this.testNullAltText(e), n = 0; n < t.img.emptyAltInLink.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.emptyAltInLink[n],
            'Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.',
            'Img.EmptyAltInLink'
          )
        for (n = 0; n < t.img.nullAltWithTitle.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.nullAltWithTitle[n],
            'Img element with empty alt text must have absent or empty title attribute.',
            'Img.NullAltWithTitle'
          )
        for (n = 0; n < t.img.ignored.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.img.ignored[n],
            'Img element is marked so that it is ignored by Assistive Technology.',
            'Img.Ignored'
          )
        for (n = 0; n < t.img.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.missingAlt[n],
            'Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.',
            'Img.MissingAlt'
          )
        for (n = 0; n < t.img.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.img.generalAlt[n],
            "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
            'Img.GeneralAlt'
          )
        for (n = 0; n < t.inputImage.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.inputImage.missingAlt[n],
            "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
            'InputImage.MissingAlt'
          )
        for (n = 0; n < t.inputImage.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.inputImage.generalAlt[n],
            "Ensure that the image submit button's alt text identifies the purpose of the button.",
            'InputImage.GeneralAlt'
          )
        for (n = 0; n < t.area.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.area.missingAlt[n],
            'Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.',
            'Area.MissingAlt'
          )
        for (n = 0; n < t.area.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.area.generalAlt[n],
            "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
            'Area.GeneralAlt'
          )
      },
      testMediaTextAlternatives: function (e) {
        for (
          var t = {
              object: { missingBody: [], generalAlt: [] },
              applet: { missingBody: [], missingAlt: [], generalAlt: [] },
            },
            n = HTMLCS.util.getAllElements(e, 'object'),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i]
          if (null === a.querySelector('object'))
            '' === (r = HTMLCS.util.getElementTextContent(a, !0))
              ? t.object.missingBody.push(a)
              : t.object.generalAlt.push(a)
        }
        for (n = HTMLCS.util.getAllElements(e, 'applet'), i = 0; i < n.length; i++) {
          var o = !1
          if (null === a.querySelector('object')) {
            var r = HTMLCS.util.getElementTextContent(a, !0)
            !0 === HTMLCS.util.isStringEmpty(r) && (t.applet.missingBody.push(a), (o = !0))
          }
          var s = a.getAttribute('alt') || ''
          !0 === HTMLCS.util.isStringEmpty(s) && (t.applet.missingAlt.push(a), (o = !0)),
            !1 === o && t.applet.generalAlt.push(a)
        }
        return t
      },
      addMediaAlternativesResults: function (e) {
        for (
          var t = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1.testMediaTextAlternatives(e),
            n = 0;
          n < t.object.missingBody.length;
          n++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.object.missingBody[n],
            'Object elements must contain a text alternative after all other alternatives are exhausted.',
            'Object.MissingBody'
          )
        for (n = 0; n < t.object.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.object.generalAlt[n],
            'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.',
            'Object.GeneralAlt'
          )
        for (n = 0; n < t.applet.missingBody.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.applet.missingBody[n],
            "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
            'Applet.MissingBody'
          )
        for (n = 0; n < t.applet.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.applet.missingAlt[n],
            'Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.',
            'Applet.MissingAlt'
          )
        for (n = 0; n < t.applet.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.applet.generalAlt[n],
            'Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.',
            'Applet.GeneralAlt'
          )
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_B = {
      register: function () {
        return ['object', 'applet', 'embed', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          'For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.',
          'Video'
        ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            'For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.',
            'Captions'
          )
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_C = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          'Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.',
          'Colour'
        )
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_D = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        e === t &&
          (HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            'Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.',
            'Linearised'
          ),
          this.testPresentationMarkup(t),
          this.testHeadingOrder(t),
          0 < HTMLCS.util.getAllElements(t, 'script, link[rel="stylesheet"]').length &&
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              t,
              'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
              'HiddenText'
            ))
      },
      testPresentationMarkup: function (e) {
        _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testPresentationMarkup(e)
      },
      testHeadingOrder: function (e) {
        for (
          var t = 0, n = HTMLCS.util.getAllElements(e, 'h1, h2, h3, h4, h5, h6'), i = 0;
          i < n.length;
          i++
        ) {
          var a = parseInt(n[i].nodeName.substr(1, 1))
          if (1 < a - t) {
            var o = 'should be an h' + (t + 1) + ' to be properly nested'
            0 === t &&
              (o = 'appears to be the primary document heading, so should be an h1 element'),
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                n[i],
                'The heading structure is not logically nested. This h' + a + ' element ' + o + '.',
                'HeadingOrder'
              )
          }
          t = a
        }
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_G = {
      register: function () {
        return ['table']
      },
      process: function (e, t) {
        !0 === HTMLCS.util.isLayoutTable(e) &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            'This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.',
            'TableHeaders'
          )
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_H = {
      register: function () {
        return ['table']
      },
      process: function (e, t) {
        for (var n = HTMLCS.util.testTableHeaders(e), i = 0; i < n.wrongHeaders.length; i++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            n.wrongHeaders[i].element,
            'Incorrect headers attribute on this td element. Expected "' +
              n.wrongHeaders[i].expected +
              '" but found "' +
              n.wrongHeaders[i].actual +
              '"',
            'IncorrectHeadersAttr'
          )
        !0 === n.required &&
          !1 === n.allowScope &&
          (!1 === n.used
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                'The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.',
                'MissingHeadersAttrs'
              )
            : (0 < n.missingThId.length &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
                  'MissingHeaderIds'
                ),
              0 < n.missingTd.length &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  'Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.',
                  'IncompleteHeadersAttrs'
                )))
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_I = {
      register: function () {
        return ['frame', 'iframe', 'object']
      },
      process: function (e, t) {
        var n = e.nodeName.toLowerCase(),
          i = !0
        !0 === e.hasAttribute('title') && (i = HTMLCS.util.isStringEmpty(e.getAttribute('title'))),
          !0 === i &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              t,
              'This ' +
                n +
                ' element is missing title text. Frames should be titled with text that facilitates frame identification and navigation.',
              'Frames'
            )
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_J = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          'Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.',
          'Flicker'
        )
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_K = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
          'AltVersion'
        )
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_L = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        e === t && (this.addProcessLinksMessages(t), this.testKeyboard(t))
      },
      addProcessLinksMessages: function (e) {
        for (var t = this.processLinks(e), n = 0; n < t.emptyNoId.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.emptyNoId[n],
            'Anchor element found with no link content and no name and/or ID attribute.',
            'EmptyAnchorNoId'
          )
        for (n = 0; n < t.placeholder.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.placeholder[n],
            'Anchor element found with link content, but no href, ID, or name attribute has been supplied.',
            'PlaceholderAnchor'
          )
        for (n = 0; n < t.noContent.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.noContent[n],
            'Anchor element found with a valid href attribute, but no link content has been supplied.',
            'NoContentAnchor'
          )
      },
      processLinks: function (e) {
        for (
          var t = {
              empty: [],
              emptyWithName: [],
              emptyNoId: [],
              noHref: [],
              placeholder: [],
              noContent: [],
            },
            n = HTMLCS.util.getAllElements(e, 'a'),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i],
            o = !1,
            r = HTMLCS.util.getElementTextContent(a)
          !0 === a.hasAttribute('href') && !1 === /^\s*$/.test(a.getAttribute('href')) && (o = !0),
            !1 === o
              ? !0 === /^\s*$/.test(r)
                ? !0 === a.hasAttribute('id')
                  ? t.empty.push(a)
                  : !0 === a.hasAttribute('name')
                    ? t.emptyWithName.push(a)
                    : t.emptyNoId.push(a)
                : !0 === a.hasAttribute('id') || !0 === a.hasAttribute('name')
                  ? t.noHref.push(a)
                  : t.placeholder.push(a)
              : !0 === /^\s*$/.test(r) &&
                0 === a.querySelectorAll('img').length &&
                t.noContent.push(a)
        }
        return t
      },
      testKeyboard: function (e) {
        for (var t = HTMLCS.util.getAllElements(e, '*[ondblclick]'), n = 0; n < t.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t[n],
            'Ensure the functionality provided by double-clicking on this element is available through the keyboard.',
            'DblClick'
          )
        var i = HTMLCS.util.getAllElements(e, '*[onmouseover]')
        for (n = 0; n < i.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            i[n],
            'Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.',
            'MouseOver'
          )
        var a = HTMLCS.util.getAllElements(e, '*[onmouseout]')
        for (n = 0; n < a.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            a[n],
            'Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.',
            'MouseOut'
          )
        var o = HTMLCS.util.getAllElements(e, '*[onmousemove]')
        for (n = 0; n < o.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            o[n],
            'Ensure the functionality provided by moving the mouse on this element is available through the keyboard.',
            'MouseMove'
          )
        var r = HTMLCS.util.getAllElements(e, '*[onmousedown]')
        for (n = 0; n < r.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            r[n],
            'Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.',
            'MouseDown'
          )
        var s = HTMLCS.util.getAllElements(e, '*[onmouseup]')
        for (n = 0; n < s.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            s[n],
            'Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.',
            'MouseUp'
          )
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_M = {
      register: function () {
        return ['object', 'applet', 'bgsound', 'embed', 'audio', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          'If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.',
          'PluginLink'
        )
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_N = {
      register: function () {
        return ['form']
      },
      process: function (e, t) {
        'form' === e.nodeName.toLowerCase() &&
          (HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            'If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.',
            'Errors'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            'Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.',
            'Labels'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            'Ensure that this form can be navigated using the keyboard and other accessibility tools.',
            'KeyboardNav'
          ))
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_O = {
      register: function () {
        return ['_top', 'a', 'area']
      },
      process: function (e, t) {
        if (e === t)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            'Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.',
            'SkipLinks'
          )
        else if (!0 === e.hasAttribute('href')) {
          var n = e.getAttribute('href')
          if (1 < (n = HTMLCS.util.trim(n)).length && '#' === n.charAt(0)) {
            var i = n.substr(1)
            try {
              var a = t
              a.ownerDocument && (a = a.ownerDocument)
              var o = a.getElementById(i)
              null === o && (o = a.querySelector('a[name="' + i + '"]')),
                (null !== o && !1 !== HTMLCS.util.contains(t, o)) ||
                  (!0 === HTMLCS.isFullDoc(t) || 'body' === t.nodeName.toLowerCase()
                    ? HTMLCS.addMessage(
                        HTMLCS.ERROR,
                        e,
                        'This link points to a named anchor "' +
                          i +
                          '" within the document, but no anchor exists with that name.',
                        'NoSuchID'
                      )
                    : HTMLCS.addMessage(
                        HTMLCS.WARNING,
                        e,
                        'This link points to a named anchor "' +
                          i +
                          '" within the document, but no anchor exists with that name in the fragment tested.',
                        'NoSuchIDFragment'
                      ))
            } catch (e) {}
          }
        }
      },
    }),
    (_global.HTMLCS_Section508_Sniffs_P = {
      register: function () {
        return ['_top', 'meta']
      },
      process: function (e, t) {
        e === t
          ? HTMLCS.addMessage(
              HTMLCS.NOTICE,
              t,
              'If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.',
              'TimeLimit'
            )
          : !0 === e.hasAttribute('http-equiv') &&
            'refresh' === String(e.getAttribute('http-equiv')).toLowerCase() &&
            !0 === /^[1-9]\d*/.test(e.getAttribute('content').toLowerCase()) &&
            (!0 === /url=/.test(e.getAttribute('content').toLowerCase())
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  'Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.',
                  'MetaRedirect'
                )
              : HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  'Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.',
                  'MetaRefresh'
                ))
      },
    }),
    (_global.HTMLCS_WCAG2A = {
      name: 'WCAG2A',
      description: 'Web Content Accessibility Guidelines (WCAG) 2.1 A',
      sniffs: [
        {
          standard: 'WCAG2AAA',
          include: [
            'Principle1.Guideline1_1.1_1_1',
            'Principle1.Guideline1_2.1_2_1',
            'Principle1.Guideline1_2.1_2_2',
            'Principle1.Guideline1_2.1_2_3',
            'Principle1.Guideline1_3.1_3_1',
            'Principle1.Guideline1_3.1_3_1_A',
            'Principle1.Guideline1_3.1_3_2',
            'Principle1.Guideline1_3.1_3_3',
            'Principle1.Guideline1_4.1_4_1',
            'Principle1.Guideline1_4.1_4_2',
            'Principle2.Guideline2_1.2_1_1',
            'Principle2.Guideline2_1.2_1_2',
            'Principle2.Guideline2_1.2_1_4',
            'Principle2.Guideline2_2.2_2_1',
            'Principle2.Guideline2_2.2_2_2',
            'Principle2.Guideline2_3.2_3_1',
            'Principle2.Guideline2_4.2_4_1',
            'Principle2.Guideline2_4.2_4_2',
            'Principle2.Guideline2_4.2_4_3',
            'Principle2.Guideline2_4.2_4_4',
            'Principle2.Guideline2_5.2_5_1',
            'Principle2.Guideline2_5.2_5_2',
            'Principle2.Guideline2_5.2_5_3',
            'Principle2.Guideline2_5.2_5_4',
            'Principle3.Guideline3_1.3_1_1',
            'Principle3.Guideline3_2.3_2_1',
            'Principle3.Guideline3_2.3_2_2',
            'Principle3.Guideline3_3.3_3_1',
            'Principle3.Guideline3_3.3_3_2',
            'Principle4.Guideline4_1.4_1_1',
            'Principle4.Guideline4_1.4_1_2',
          ],
        },
      ],
      getMsgInfo: function (e) {
        return HTMLCS_WCAG2AAA.getMsgInfo(e)
      },
    }),
    (_global.HTMLCS_WCAG2AA = {
      name: 'WCAG2AA',
      description: 'Web Content Accessibility Guidelines (WCAG) 2.1 AA',
      sniffs: [
        {
          standard: 'WCAG2AAA',
          include: [
            'Principle1.Guideline1_1.1_1_1',
            'Principle1.Guideline1_2.1_2_1',
            'Principle1.Guideline1_2.1_2_2',
            'Principle1.Guideline1_2.1_2_4',
            'Principle1.Guideline1_2.1_2_5',
            'Principle1.Guideline1_3.1_3_1',
            'Principle1.Guideline1_3.1_3_1_A',
            'Principle1.Guideline1_3.1_3_2',
            'Principle1.Guideline1_3.1_3_3',
            'Principle1.Guideline1_3.1_3_4',
            'Principle1.Guideline1_3.1_3_5',
            'Principle1.Guideline1_4.1_4_1',
            'Principle1.Guideline1_4.1_4_2',
            'Principle1.Guideline1_4.1_4_3',
            'Principle1.Guideline1_4.1_4_3_F24',
            'Principle1.Guideline1_4.1_4_3_Contrast',
            'Principle1.Guideline1_4.1_4_4',
            'Principle1.Guideline1_4.1_4_5',
            'Principle1.Guideline1_4.1_4_10',
            'Principle1.Guideline1_4.1_4_11',
            'Principle1.Guideline1_4.1_4_12',
            'Principle1.Guideline1_4.1_4_13',
            'Principle2.Guideline2_1.2_1_1',
            'Principle2.Guideline2_1.2_1_2',
            'Principle2.Guideline2_1.2_1_4',
            'Principle2.Guideline2_2.2_2_1',
            'Principle2.Guideline2_2.2_2_2',
            'Principle2.Guideline2_3.2_3_1',
            'Principle2.Guideline2_4.2_4_1',
            'Principle2.Guideline2_4.2_4_2',
            'Principle2.Guideline2_4.2_4_3',
            'Principle2.Guideline2_4.2_4_4',
            'Principle2.Guideline2_4.2_4_5',
            'Principle2.Guideline2_4.2_4_6',
            'Principle2.Guideline2_4.2_4_7',
            'Principle2.Guideline2_5.2_5_1',
            'Principle2.Guideline2_5.2_5_2',
            'Principle2.Guideline2_5.2_5_3',
            'Principle2.Guideline2_5.2_5_4',
            'Principle3.Guideline3_1.3_1_1',
            'Principle3.Guideline3_1.3_1_2',
            'Principle3.Guideline3_2.3_2_1',
            'Principle3.Guideline3_2.3_2_2',
            'Principle3.Guideline3_2.3_2_3',
            'Principle3.Guideline3_2.3_2_4',
            'Principle3.Guideline3_3.3_3_1',
            'Principle3.Guideline3_3.3_3_2',
            'Principle3.Guideline3_3.3_3_3',
            'Principle3.Guideline3_3.3_3_4',
            'Principle4.Guideline4_1.4_1_1',
            'Principle4.Guideline4_1.4_1_2',
            'Principle4.Guideline4_1.4_1_3',
          ],
        },
      ],
      getMsgInfo: function (e) {
        return HTMLCS_WCAG2AAA.getMsgInfo(e)
      },
    }),
    (_global.HTMLCS_WCAG2AAA = {
      name: 'WCAG2AAA',
      description: 'Web Content Accessibility Guidelines (WCAG) 2.1 AAA',
      sniffs: [
        'Principle1.Guideline1_1.1_1_1',
        'Principle1.Guideline1_2.1_2_1',
        'Principle1.Guideline1_2.1_2_2',
        'Principle1.Guideline1_2.1_2_4',
        'Principle1.Guideline1_2.1_2_5',
        'Principle1.Guideline1_2.1_2_6',
        'Principle1.Guideline1_2.1_2_7',
        'Principle1.Guideline1_2.1_2_8',
        'Principle1.Guideline1_2.1_2_9',
        'Principle1.Guideline1_3.1_3_1',
        'Principle1.Guideline1_3.1_3_1_AAA',
        'Principle1.Guideline1_3.1_3_2',
        'Principle1.Guideline1_3.1_3_3',
        'Principle1.Guideline1_3.1_3_4',
        'Principle1.Guideline1_3.1_3_5',
        'Principle1.Guideline1_3.1_3_6',
        'Principle1.Guideline1_4.1_4_1',
        'Principle1.Guideline1_4.1_4_2',
        'Principle1.Guideline1_4.1_4_3_F24',
        'Principle1.Guideline1_4.1_4_3_Contrast',
        'Principle1.Guideline1_4.1_4_6',
        'Principle1.Guideline1_4.1_4_7',
        'Principle1.Guideline1_4.1_4_8',
        'Principle1.Guideline1_4.1_4_9',
        'Principle1.Guideline1_4.1_4_10',
        'Principle1.Guideline1_4.1_4_11',
        'Principle1.Guideline1_4.1_4_12',
        'Principle1.Guideline1_4.1_4_13',
        'Principle2.Guideline2_1.2_1_1',
        'Principle2.Guideline2_1.2_1_2',
        'Principle2.Guideline2_1.2_1_4',
        'Principle2.Guideline2_2.2_2_2',
        'Principle2.Guideline2_2.2_2_3',
        'Principle2.Guideline2_2.2_2_4',
        'Principle2.Guideline2_2.2_2_5',
        'Principle2.Guideline2_2.2_2_6',
        'Principle2.Guideline2_3.2_3_2',
        'Principle2.Guideline2_3.2_3_3',
        'Principle2.Guideline2_4.2_4_1',
        'Principle2.Guideline2_4.2_4_2',
        'Principle2.Guideline2_4.2_4_3',
        'Principle2.Guideline2_4.2_4_5',
        'Principle2.Guideline2_4.2_4_6',
        'Principle2.Guideline2_4.2_4_7',
        'Principle2.Guideline2_4.2_4_8',
        'Principle2.Guideline2_4.2_4_9',
        'Principle2.Guideline2_5.2_5_1',
        'Principle2.Guideline2_5.2_5_2',
        'Principle2.Guideline2_5.2_5_3',
        'Principle2.Guideline2_5.2_5_4',
        'Principle2.Guideline2_5.2_5_5',
        'Principle2.Guideline2_5.2_5_6',
        'Principle3.Guideline3_1.3_1_1',
        'Principle3.Guideline3_1.3_1_2',
        'Principle3.Guideline3_1.3_1_3',
        'Principle3.Guideline3_1.3_1_4',
        'Principle3.Guideline3_1.3_1_5',
        'Principle3.Guideline3_1.3_1_6',
        'Principle3.Guideline3_2.3_2_1',
        'Principle3.Guideline3_2.3_2_2',
        'Principle3.Guideline3_2.3_2_3',
        'Principle3.Guideline3_2.3_2_4',
        'Principle3.Guideline3_2.3_2_5',
        'Principle3.Guideline3_3.3_3_1',
        'Principle3.Guideline3_3.3_3_2',
        'Principle3.Guideline3_3.3_3_3',
        'Principle3.Guideline3_3.3_3_5',
        'Principle3.Guideline3_3.3_3_6',
        'Principle4.Guideline4_1.4_1_1',
        'Principle4.Guideline4_1.4_1_2',
        'Principle4.Guideline4_1.4_1_3',
      ],
      getMsgInfo: function (e) {
        var t = {
            Principle1: { name: 'Perceivable', link: 'http://www.w3.org/TR/WCAG21/#perceivable' },
            Principle2: { name: 'Operable', link: 'http://www.w3.org/TR/WCAG21/#operable' },
            Principle3: {
              name: 'Understandable',
              link: 'http://www.w3.org/TR/WCAG21/#understandable',
            },
            Principle4: { name: 'Robust', link: 'http://www.w3.org/TR/WCAG21/#robust' },
          },
          n = {
            'CR2': { name: 'Full pages', landmark: 'cc2', priority: 0 },
            'CR3': { name: 'Complete processes', landmark: 'cc3', priority: 0 },
            'CR4': {
              name: 'Only Accessibility-Supported Ways of Using Technologies',
              landmark: 'cc4',
              priority: 0,
            },
            'CR5': { name: 'Non-Interference', landmark: 'cc5', priority: 0 },
            '1.1.1': { name: 'Non-Text Content', landmark: 'non-text-content', priority: 1 },
            '1.2.1': {
              name: 'Audio-only and Video-only (Prerecorded)',
              landmark: 'audio-only-and-video-only-prerecorded',
              priority: 1,
            },
            '1.2.2': {
              name: 'Captions (Prerecorded)',
              landmark: 'captions-prerecorded',
              priority: 1,
            },
            '1.2.3': {
              name: 'Audio Description or Media Alternative (Prerecorded)',
              landmark: 'audio-description-or-media-alternative-prerecorded',
              priority: 1,
            },
            '1.2.4': { name: 'Captions (Live)', landmark: 'captions-live', priority: 2 },
            '1.2.5': {
              name: 'Audio Description (Prerecorded)',
              landmark: 'audio-description-prerecorded',
              priority: 2,
            },
            '1.2.6': {
              name: 'Sign Language (Prerecorded)',
              landmark: 'sign-language-prerecorded',
              priority: 3,
            },
            '1.2.7': {
              name: 'Extended Audio Description (Prerecorded)',
              landmark: 'extended-audio-description-prerecorded',
              priority: 3,
            },
            '1.2.8': {
              name: 'Media Alternative (Prerecorded)',
              landmark: 'media-alternative-prerecorded',
              priority: 3,
            },
            '1.2.9': { name: 'Audio-only (Live)', landmark: 'audio-only-live', priority: 3 },
            '1.3.1': {
              name: 'Info and Relationships',
              landmark: 'info-and-relationships',
              priority: 1,
            },
            '1.3.2': { name: 'Meaningful Sequence', landmark: 'meaningful-sequence', priority: 1 },
            '1.3.3': {
              name: 'Sensory Characteristics',
              landmark: 'sensory-characteristics',
              priority: 1,
            },
            '1.3.4': { name: 'Orientation', landmark: 'orientation', priority: 2 },
            '1.3.5': {
              name: 'Identify Input Purpose',
              landmark: 'identify-input-purpose',
              priority: 2,
            },
            '1.3.6': { name: 'Identify Purpose', landmark: 'identify-purpose', priority: 3 },
            '1.4.1': { name: 'Use of Colour', landmark: 'use-of-color', priority: 1 },
            '1.4.2': { name: 'Audio Control', landmark: 'audio-control', priority: 1 },
            '1.4.3': { name: 'Contrast (Minimum)', landmark: 'contrast-minimum', priority: 1 },
            '1.4.4': { name: 'Resize Text', landmark: 'resize-text', priority: 1 },
            '1.4.5': { name: 'Images of Text', landmark: 'images-of-text', priority: 1 },
            '1.4.6': { name: 'Contrast (Enhanced)', landmark: 'contrast-enhanced', priority: 3 },
            '1.4.7': {
              name: 'Low or No Background Audio',
              landmark: 'low-or-no-background-audio',
              priority: 3,
            },
            '1.4.8': { name: 'Visual Presentation', landmark: 'visual--presentation', priority: 3 },
            '1.4.9': {
              name: 'Images of Text (No Exception)',
              landmark: 'images-of-text-no-exception',
              priority: 3,
            },
            '1.4.10': { name: 'Reflow', landmark: 'reflow', priority: 2 },
            '1.4.11': { name: 'Non-text Contrast', landmark: 'non-text-contrast', priority: 2 },
            '1.4.12': { name: 'Text Spacing', landmark: 'text-spacing', priority: 2 },
            '1.4.13': {
              name: 'Content on Hover or Focus',
              landmark: 'content-on-hover-or-focus',
              priority: 2,
            },
            '2.1.1': { name: 'Keyboard', landmark: 'keyboard', priority: 1 },
            '2.1.2': { name: 'No Keyboard Trap', landmark: 'no-keyboard-trap', priority: 1 },
            '2.1.3': {
              name: 'Keyboard (No Exception)',
              landmark: 'keyboard-no-exception',
              priority: 3,
            },
            '2.1.4': {
              name: 'Character Key Shortcuts',
              landmark: 'character-key-shortcuts',
              priority: 1,
            },
            '2.2.1': { name: 'Timing Adjustable', landmark: 'timing-adjustable', priority: 1 },
            '2.2.2': { name: 'Pause, Stop, Hide', landmark: 'pause-stop-hide', priority: 1 },
            '2.2.3': { name: 'No Timing', landmark: 'no-timing', priority: 3 },
            '2.2.4': { name: 'Interruptions', landmark: 'interruptions', priority: 3 },
            '2.2.5': { name: 'Re-authenticating', landmark: 're-authenticating', priority: 3 },
            '2.2.6': { name: 'Timeouts', landmark: 'timeouts', priority: 3 },
            '2.3.1': {
              name: 'Three Flashes or Below Threshold',
              landmark: 'three-flashes-or-below-threshold',
              priority: 1,
            },
            '2.3.2': { name: 'Three Flashes', landmark: 'three-flashes', priority: 3 },
            '2.3.3': {
              name: 'Animation from Interactions',
              landmark: 'animation-from-interactions',
              priority: 3,
            },
            '2.4.1': { name: 'Bypass Blocks', landmark: 'bypass-blocks', priority: 1 },
            '2.4.2': { name: 'Page Titled', landmark: 'page-titled', priority: 1 },
            '2.4.3': { name: 'Focus Order', landmark: 'focus-order', priority: 1 },
            '2.4.4': {
              name: 'Link Purpose (In Context)',
              landmark: 'link-purpose-in-context',
              priority: 1,
            },
            '2.4.5': { name: 'Multiple Ways', landmark: 'multiple-ways', priority: 2 },
            '2.4.6': { name: 'Headings and Labels', landmark: 'headings-and-labels', priority: 2 },
            '2.4.7': { name: 'Focus Visible', landmark: 'focus-visible', priority: 2 },
            '2.4.8': { name: 'Location', landmark: 'location', priority: 3 },
            '2.4.9': {
              name: 'Link Purpose (Link Only)',
              landmark: 'link-purpose-link-only',
              priority: 3,
            },
            '2.4.10': { name: 'Section Headings', landmark: 'section-headings', priority: 3 },
            '2.5.1': { name: 'Pointer Gestures', landmark: 'pointer-gestures', priority: 1 },
            '2.5.2': {
              name: 'Pointer Cancellation',
              landmark: 'pointer-cancellation',
              priority: 1,
            },
            '2.5.3': { name: 'Label In Name', landmark: 'label-in-name', priority: 1 },
            '2.5.4': { name: 'Motion Actuation', landmark: 'motion-actuation', priority: 1 },
            '2.5.5': { name: 'Target Size', landmark: 'target-size', priority: 3 },
            '2.5.6': {
              name: 'Concurrent Input Mechanisms',
              landmark: 'concurrent-input-mechanisms',
              priority: 3,
            },
            '3.1.1': { name: 'Language of Page', landmark: 'language-of-page', priority: 1 },
            '3.1.2': { name: 'Language of Parts', landmark: 'language-of-parts', priority: 2 },
            '3.1.3': { name: 'Unusual Words', landmark: 'unusual-words', priority: 3 },
            '3.1.4': { name: 'Abbreviations', landmark: 'abbreviations', priority: 3 },
            '3.1.5': { name: 'Reading Level', landmark: 'reading-level', priority: 3 },
            '3.1.6': { name: 'Pronunciation', landmark: 'pronunciation', priority: 3 },
            '3.2.1': { name: 'On Focus', landmark: 'on-focus', priority: 1 },
            '3.2.2': { name: 'On Input', landmark: 'on-input', priority: 1 },
            '3.2.3': {
              name: 'Consistent Navigation',
              landmark: 'consistent-navigation',
              priority: 2,
            },
            '3.2.4': {
              name: 'Consistent Identification',
              landmark: 'consistent-identification',
              priority: 2,
            },
            '3.2.5': { name: 'Change on Request', landmark: 'change-on-request', priority: 3 },
            '3.3.1': {
              name: 'Error Identification',
              landmark: 'error-identification',
              priority: 1,
            },
            '3.3.2': {
              name: 'Labels or Instructions',
              landmark: 'labels-or-instructions',
              priority: 1,
            },
            '3.3.3': { name: 'Error Suggestion', landmark: 'error-suggestion', priority: 2 },
            '3.3.4': {
              name: 'Error Prevention (Legal, Financial, Data)',
              landmark: 'error-prevention-legal-financial-data',
              priority: 2,
            },
            '3.3.5': { name: 'Help', landmark: 'help', priority: 3 },
            '3.3.6': {
              name: 'Error Prevention (All)',
              landmark: 'error-prevention-all',
              priority: 3,
            },
            '4.1.1': { name: 'Parsing', landmark: 'parsing', priority: 1 },
            '4.1.2': { name: 'Name, Role, Value', landmark: 'name-role-value', priority: 1 },
            '4.1.3': { name: 'Status Messages', landmark: 'status-messages', priority: 2 },
          },
          i = e.split('.', 5),
          a = i[1],
          o = i[3].split('_').slice(0, 3).join('.'),
          r = i[4].split(','),
          s = []
        function l(e) {
          function t(e, t, n) {
            var i = 0 < n ? 0 | n : 0
            return e.substring(i, i + t.length) === t
          }
          return t(e, 'ARIA')
            ? 'aria/'
            : t(e, 'SCR')
              ? 'client-side-script/'
              : t(e, 'C')
                ? 'css/'
                : t(e, 'FLASH')
                  ? 'flash/'
                  : t(e, 'F')
                    ? 'failures/'
                    : t(e, 'G')
                      ? 'general/'
                      : t(e, 'H')
                        ? 'html/'
                        : t(e, 'PDF')
                          ? 'pdf/'
                          : t(e, 'SVR')
                            ? 'server-side-script/'
                            : t(e, 'SL')
                              ? 'silverlight/'
                              : t(e, 'SM')
                                ? 'smil/'
                                : t(e, 'T')
                                  ? 'text/'
                                  : ''
        }
        for (var d = 0; d < r.length; d++)
          (r[d] = r[d].split('.')),
            '' !== r[d][0] &&
              s.push(
                '<a href="https://www.w3.org/WAI/WCAG21/Techniques/' +
                  l(r[d][0]) +
                  r[d][0] +
                  '" target="_blank">' +
                  r[d][0] +
                  '</a>'
              )
        var u = [
            '<a href="http://www.w3.org/TR/WCAG21/#' + n[o].landmark,
            '" target="_blank">',
            o,
            ': ',
            n[o].name,
            '</a>',
          ].join(''),
          _ =
            (['<a href="', t[a].link, '" target="_blank">', t[a].name, '</a>'].join(''),
            [[_global.HTMLCS.getTranslation('auditor_success_criterion'), u]])
        return (
          0 < s.length &&
            _.push([_global.HTMLCS.getTranslation('auditor_suggested_techniques'), s.join(' ')]),
          _
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1 = {
      register: function () {
        return ['_top', 'img']
      },
      process: function (e, t) {
        if (e === t) this.addNullAltTextResults(t), this.addMediaAlternativesResults(t)
        else
          switch (e.nodeName.toLowerCase()) {
            case 'img':
              this.testLinkStutter(e), this.testLongdesc(e)
          }
      },
      addNullAltTextResults: function (e) {
        for (var t = this.testNullAltText(e), n = 0; n < t.img.emptyAltInLink.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.emptyAltInLink[n],
            _global.HTMLCS.getTranslation('1_1_1_H30.2'),
            'H30.2'
          )
        for (n = 0; n < t.img.nullAltWithTitle.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.nullAltWithTitle[n],
            _global.HTMLCS.getTranslation('1_1_1_H67.1'),
            'H67.1'
          )
        for (n = 0; n < t.img.ignored.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.img.ignored[n],
            _global.HTMLCS.getTranslation('1_1_1_H67.2'),
            'H67.2'
          )
        for (n = 0; n < t.img.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.img.missingAlt[n],
            _global.HTMLCS.getTranslation('1_1_1_H37'),
            'H37'
          )
        for (n = 0; n < t.img.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.img.generalAlt[n],
            _global.HTMLCS.getTranslation('1_1_1_G94.Image'),
            'G94.Image'
          )
        for (n = 0; n < t.inputImage.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.inputImage.missingAlt[n],
            _global.HTMLCS.getTranslation('1_1_1_H36'),
            'H36'
          )
        for (n = 0; n < t.inputImage.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.inputImage.generalAlt[n],
            _global.HTMLCS.getTranslation('1_1_1_G94.Button'),
            'G94.Button'
          )
        for (n = 0; n < t.area.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.area.missingAlt[n],
            _global.HTMLCS.getTranslation('1_1_1_H24'),
            'H24'
          )
        for (n = 0; n < t.area.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.area.generalAlt[n],
            _global.HTMLCS.getTranslation('1_1_1_H24.2'),
            'H24.2'
          )
      },
      testNullAltText: function (e) {
        var t = {
          img: {
            generalAlt: [],
            missingAlt: [],
            ignored: [],
            nullAltWithTitle: [],
            emptyAltInLink: [],
          },
          inputImage: { generalAlt: [], missingAlt: [] },
          area: { generalAlt: [], missingAlt: [] },
        }
        elements = HTMLCS.util.getAllElements(e, 'img, area, input[type="image"]')
        for (var n = 0; n < elements.length; n++) {
          var i = elements[n],
            a = i.nodeName.toLowerCase(),
            o = !1,
            r = !1,
            s = !1
          if ('a' === i.parentNode.nodeName.toLowerCase()) {
            var l = HTMLCS.util.getPreviousSiblingElement(i, null),
              d = HTMLCS.util.getNextSiblingElement(i, null)
            if (null === l && null === d) {
              var u = i.parentNode.textContent
              if (void 0 !== i.parentNode.textContent) u = i.parentNode.textContent
              else u = i.parentNode.innerText
              !0 === HTMLCS.util.isStringEmpty(u) && (o = !0)
            }
          }
          switch (
            (!1 === i.hasAttribute('alt')
              ? (r = !0)
              : (i.getAttribute('alt') &&
                  !0 !== HTMLCS.util.isStringEmpty(i.getAttribute('alt'))) ||
                (s = !0),
            a)
          ) {
            case 'img':
              !0 !== o || (!0 !== r && !0 !== s)
                ? !0 === r
                  ? t.img.missingAlt.push(i)
                  : !0 === s
                    ? !0 === i.hasAttribute('title') &&
                      !1 === HTMLCS.util.isStringEmpty(i.getAttribute('title'))
                      ? t.img.nullAltWithTitle.push(i)
                      : t.img.ignored.push(i)
                    : t.img.generalAlt.push(i)
                : t.img.emptyAltInLink.push(i.parentNode)
              break
            case 'input':
              !0 === r || !0 === s
                ? t.inputImage.missingAlt.push(i)
                : t.inputImage.generalAlt.push(i)
              break
            case 'area':
              !0 === r || !0 === s ? t.area.missingAlt.push(i) : t.inputImage.generalAlt.push(i)
          }
        }
        return t
      },
      testLongdesc: function (e) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('1_1_1_G73,G74'),
          'G73,G74'
        )
      },
      testLinkStutter: function (e) {
        if ('a' === e.parentNode.nodeName.toLowerCase()) {
          var t = e.parentNode,
            n = {
              anchor: {
                href: t.getAttribute('href'),
                text: HTMLCS.util.getElementTextContent(t, !1),
                alt: this._getLinkAltText(t),
              },
            }
          if (
            (null === n.anchor.alt && (n.anchor.alt = ''),
            null !== n.anchor.alt &&
              '' !== n.anchor.alt &&
              HTMLCS.util.trim(n.anchor.alt).toLowerCase() ===
                HTMLCS.util.trim(n.anchor.text).toLowerCase() &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('1_1_1_H2.EG5'),
                'H2.EG5'
              ),
            '' === n.anchor.text)
          ) {
            var i = HTMLCS.util.getPreviousSiblingElement(t, 'a', !0),
              a = HTMLCS.util.getNextSiblingElement(t, 'a', !0)
            null !== i &&
              ((n.previous = {
                href: i.getAttribute('href'),
                text: HTMLCS.util.getElementTextContent(i, !1),
                alt: this._getLinkAltText(i),
              }),
              null === n.previous.alt && (n.previous.alt = '')),
              null !== a &&
                ((n.next = {
                  href: a.getAttribute('href'),
                  text: HTMLCS.util.getElementTextContent(a, !1),
                  alt: this._getLinkAltText(a),
                }),
                null === n.next.alt && (n.next.alt = '')),
              n.next &&
                '' !== n.next.href &&
                null !== n.next.href &&
                n.anchor.href === n.next.href &&
                ('' !== n.next.text && '' === n.anchor.alt
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('1_1_1_H2.EG4'),
                      'H2.EG4'
                    )
                  : n.next.text.toLowerCase() === n.anchor.alt.toLowerCase() &&
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('1_1_1_H2.EG3'),
                      'H2.EG3'
                    )),
              n.previous &&
                '' !== n.previous.href &&
                null !== n.previous.href &&
                n.anchor.href === n.previous.href &&
                ('' !== n.previous.text && '' === n.anchor.alt
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('1_1_1_H2.EG4'),
                      'H2.EG4'
                    )
                  : n.previous.text.toLowerCase() === n.anchor.alt.toLowerCase() &&
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('1_1_1_H2.EG3')
                    ))
          }
        }
      },
      addMediaAlternativesResults: function (e) {
        for (var t = this.testMediaTextAlternatives(e), n = 0; n < t.object.missingBody.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.object.missingBody[n],
            _global.HTMLCS.getTranslation('1_1_1_H53,ARIA6'),
            'H53,ARIA6'
          )
        for (n = 0; n < t.object.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.object.generalAlt[n],
            _global.HTMLCS.getTranslation('1_1_1_G94,G92.Object,ARIA6'),
            'G94,G92.Object,ARIA6'
          )
        for (n = 0; n < t.applet.missingBody.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.applet.missingBody[n],
            _global.HTMLCS.getTranslation('1_1_1_H35.3'),
            'H35.3'
          )
        for (n = 0; n < t.applet.missingAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.applet.missingAlt[n],
            _global.HTMLCS.getTranslation('1_1_1_H35.2'),
            'H35.2'
          )
        for (n = 0; n < t.applet.generalAlt.length; n++)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t.applet.generalAlt[n],
            _global.HTMLCS.getTranslation('1_1_1_G94,G92.Applet'),
            'G94,G92.Applet'
          )
      },
      testMediaTextAlternatives: function (e) {
        for (
          var t = {
              object: { missingBody: [], generalAlt: [] },
              applet: { missingBody: [], missingAlt: [], generalAlt: [] },
            },
            n = HTMLCS.util.getAllElements(e, 'object'),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i]
          null === a.querySelector('object') &&
            (!0 === HTMLCS.util.isStringEmpty(HTMLCS.util.getElementTextContent(a, !0))
              ? !1 === HTMLCS.util.hasValidAriaLabel(a) && t.object.missingBody.push(a)
              : !1 === HTMLCS.util.hasValidAriaLabel(a) && t.object.generalAlt.push(a))
        }
        for (n = HTMLCS.util.getAllElements(e, 'applet'), i = 0; i < n.length; i++) {
          var o = !1
          if (null === a.querySelector('object')) {
            var r = HTMLCS.util.getElementTextContent(a, !0)
            !0 === HTMLCS.util.isStringEmpty(r) && (t.applet.missingBody.push(a), (o = !0))
          }
          var s = a.getAttribute('alt') || ''
          !0 === HTMLCS.util.isStringEmpty(s) && (t.applet.missingAlt.push(a), (o = !0)),
            !0 === HTMLCS.util.hasValidAriaLabel(a) && (o = !1),
            !1 === o && t.applet.generalAlt.push(a)
        }
        return t
      },
      _getLinkAltText: function (e) {
        e = e.cloneNode(!0)
        for (var t = [], n = 0; n < e.childNodes.length; n++) t.push(e.childNodes[n])
        for (var i = null; 0 < t.length; ) {
          var a = t.shift()
          if (
            1 === a.nodeType &&
            'img' === a.nodeName.toLowerCase() &&
            !0 === a.hasAttribute('alt')
          ) {
            i = (i = a.getAttribute('alt')) ? i.replace(/^\s+|\s+$/g, '') : ''
            break
          }
        }
        return i
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_1 = {
      register: function () {
        return ['object', 'embed', 'applet', 'bgsound', 'audio', 'video']
      },
      process: function (e, t) {
        var n = e.nodeName.toLowerCase()
        'video' !== n &&
          HTMLCS.addMessage(HTMLCS.NOTICE, e, _global.HTMLCS.getTranslation('1_2_1_G158'), 'G158'),
          'bgsound' !== n &&
            'audio' !== n &&
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation('1_2_1_G159,G166'),
              'G159,G166'
            )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_2 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('1_2_2_G87,G93'),
          'G87,G93'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_3 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('1_2_3_G69,G78,G173,G8'),
          'G69,G78,G173,G8'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_4 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('1_2_4_G9,G87,G93'),
          'G9,G87,G93'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_5 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('1_2_5_G78,G173,G8'),
          'G78,G173,G8'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_6 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('1_2_6_G54,G81'),
          'G54,G81'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_7 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, e, _global.HTMLCS.getTranslation('1_2_7_G8'), 'G8')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_8 = {
      register: function () {
        return ['object', 'embed', 'applet', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('1_2_8_G69,G159'),
          'G69,G159'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_9 = {
      register: function () {
        return ['object', 'embed', 'applet', 'bgsound', 'audio']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('1_2_9_G150,G151,G157'),
          'G150,G151,G157'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_A = {
      _labelNames: null,
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        var n = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1
        e === t && n.testHeadingOrder(t, HTMLCS.WARNING)
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_AAA = {
      _labelNames: null,
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        var n = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1
        e === t && n.testHeadingOrder(t, HTMLCS.ERROR)
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1 = {
      _labelNames: null,
      register: function () {
        return [
          '_top',
          'p',
          'div',
          'input',
          'select',
          'textarea',
          'button',
          'table',
          'fieldset',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ]
      },
      process: function (e, t) {
        var n = e.nodeName.toLowerCase()
        if (e === t) this.testPresentationMarkup(t), this.testEmptyDupeLabelForAttrs(t)
        else
          switch (n) {
            case 'input':
            case 'textarea':
            case 'button':
              this.testLabelsOnInputs(e, t)
              break
            case 'form':
              this.testRequiredFieldsets(e)
              break
            case 'select':
              this.testLabelsOnInputs(e, t), this.testOptgroup(e)
              break
            case 'p':
            case 'div':
              this.testNonSemanticHeading(e),
                this.testListsWithBreaks(e),
                this.testUnstructuredNavLinks(e)
              break
            case 'table':
              this.testGeneralTable(e), this.testTableHeaders(e), this.testTableCaptionSummary(e)
              break
            case 'fieldset':
              this.testFieldsetLegend(e)
              break
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
              this.testEmptyHeading(e)
          }
      },
      testSemanticPresentationRole: function (e) {
        var t = ['div', 'span', 'b', 'i']
        if (
          !1 === HTMLCS.util.isAriaHidden(e) &&
          e.hasAttribute('role') &&
          'presentation' === e.getAttribute('role') &&
          -1 === t.indexOf(e.nodeName.toLowerCase())
        ) {
          var n = e.querySelectorAll('*:not(' + t.join('):not(') + ')')
          ;(n = [].filter.call(n, function (e) {
            return !1 === e.hasAttribute('role')
          })).length &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation('1_3_1_F92,ARIA4'),
              'F92,ARIA4'
            )
        }
      },
      testEmptyDupeLabelForAttrs: function (e) {
        this._labelNames = {}
        for (var t = e.getElementsByTagName('label'), n = 0; n < t.length; n++)
          if (null !== t[n].getAttribute('for') && '' !== t[n].getAttribute('for')) {
            var i = t[n].getAttribute('for')
            if (this._labelNames[i] && null !== this._labelNames[i]) this._labelNames[i] = null
            else {
              if (((this._labelNames[i] = t[n]), e.ownerDocument))
                var a = e.ownerDocument.getElementById(i)
              else a = e.getElementById(i)
              if (null === a) {
                var o = HTMLCS.ERROR,
                  r = _global.HTMLCS.getTranslation('1_3_1_H44.NonExistent'),
                  s = 'H44.NonExistent'
                if (!0 === HTMLCS.isFullDoc(e) || 'body' === e.nodeName.toLowerCase()) {
                  ;(o = HTMLCS.WARNING),
                    (r = _global.HTMLCS.getTranslation('1_3_1_H44.NonExistentFragment'))
                  s = 'H44.NonExistentFragment'
                }
                HTMLCS.addMessage(o, t[n], r, s)
              } else {
                var l = a.nodeName.toLowerCase()
                ;-1 === 'input|select|textarea|button|keygen|meter|output|progress'.indexOf(l) &&
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    t[n],
                    _global.HTMLCS.getTranslation('1_3_1_H44.NotFormControl'),
                    'H44.NotFormControl'
                  )
              }
            }
          }
      },
      testLabelsOnInputs: function (e, t, n) {
        'input' === (i = e.nodeName.toLowerCase()) &&
          (i = !0 === e.hasAttribute('type') ? e.getAttribute('type') : 'text')
        var i,
          a = !1,
          o = function (e) {
            a || (a = {}), (a[e] = !0)
          },
          r = !1
        'select' === (i = i.toLowerCase()) || 'textarea' === i
          ? (r = !0)
          : !0 === /^(radio|checkbox|text|file|password)$/.test(i) && (r = !0),
          null !== e.getAttribute('hidden') && (r = !1),
          e.ownerDocument.querySelector('label[for="' + e.id + '"]') && o('explicit')
        var s = !1
        e.parentNode &&
          HTMLCS.util.eachParentNode(e, function (e) {
            'label' === e.nodeName.toLowerCase() && (s = !0)
          }),
          !0 === s && o('implicit')
        var l = e.getAttribute('title')
        return (
          null !== l &&
            (!0 === /^\s*$/.test(l) && !0 === r
              ? HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_H65'),
                  'H65'
                )
              : o('title')),
          !0 === e.hasAttribute('aria-label') &&
            (!1 === HTMLCS.util.hasValidAriaLabel(e)
              ? HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_ARIA6'),
                  'ARIA6'
                )
              : o('aria-label')),
          !0 === e.hasAttribute('aria-labelledby') &&
            (!1 === HTMLCS.util.hasValidAriaLabel(e)
              ? HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_ARIA16,ARIA9').replace(
                    /\{\{id\}\}/g,
                    e.getAttribute('aria-labelledby')
                  ),
                  'ARIA16,ARIA9'
                )
              : o('aria-labelledby')),
          !0 !== n &&
            (!1 !== a && !1 === r
              ? 'hidden' === i
                ? HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation('1_3_1_F68.Hidden'),
                    'F68.Hidden'
                  )
                : null !== e.getAttribute('hidden') &&
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation('1_3_1_F68.HiddenAttr'),
                    'F68.HiddenAttr'
                  )
              : !1 === a &&
                !0 === r &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_F68'),
                  'F68'
                )),
          a
        )
      },
      testPresentationMarkup: function (e) {
        var t = HTMLCS.util.getElementWindow(e).document,
          n = HTMLCS.util.getDocumentType(t)
        if (!n || ('html5' !== n && 'xhtml5' !== n)) {
          for (
            i = HTMLCS.util.getAllElements(e, 'b, i, u, s, strike, tt, big, small, center, font'),
              a = 0;
            a < i.length;
            a++
          ) {
            o =
              'H49.' +
              i[a].nodeName.substr(0, 1).toUpperCase() +
              i[a].nodeName.substr(1).toLowerCase()
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              i[a],
              _global.HTMLCS.getTranslation('1_3_1_H49.Semantic'),
              o
            )
          }
          for (i = HTMLCS.util.getAllElements(e, '*[align]'), a = 0; a < i.length; a++) {
            o = 'H49.AlignAttr'
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              i[a],
              _global.HTMLCS.getTranslation('1_3_1_H49.AlignAttr.Semantic'),
              o
            )
          }
        } else {
          for (
            var i = HTMLCS.util.getAllElements(e, 'strike, tt, big, center, font'), a = 0;
            a < i.length;
            a++
          ) {
            var o =
              'H49.' +
              i[a].nodeName.substr(0, 1).toUpperCase() +
              i[a].nodeName.substr(1).toLowerCase()
            HTMLCS.addMessage(HTMLCS.ERROR, i[a], _global.HTMLCS.getTranslation('1_3_1_H49.'), o)
          }
          for (var i = HTMLCS.util.getAllElements(e, '*[align]'), a = 0; a < i.length; a++) {
            var o = 'H49.AlignAttr'
            HTMLCS.addMessage(HTMLCS.ERROR, i[a], 'Align attributes .', o)
          }
        }
      },
      testNonSemanticHeading: function (e) {
        var t = e.nodeName.toLowerCase()
        if ('p' === t || 'div' === t) {
          var n = e.childNodes
          if (1 === n.length && 1 === n[0].nodeType) {
            var i = n[0].nodeName.toLowerCase()
            !0 === /^(strong|em|b|i|u)$/.test(i) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation('1_3_1_H42'),
                'H42'
              )
          }
        }
      },
      testTableHeaders: function (e) {
        for (
          var t = HTMLCS.util.testTableHeaders(e), n = this._testTableScopeAttrs(e), i = 0;
          i < n.invalid.length;
          i++
        )
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            n.invalid[i],
            _global.HTMLCS.getTranslation('1_3_1_H63.3'),
            'H63.3'
          )
        for (i = 0; i < n.obsoleteTd.length; i++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            n.obsoleteTd[i],
            _global.HTMLCS.getTranslation('1_3_1_H63.2'),
            'H63.2'
          )
        !0 === t.allowScope
          ? 0 === n.missing.length && t.required
          : !0 === n.used &&
            (HTMLCS.addMessage(
              HTMLCS.WARNING,
              e,
              _global.HTMLCS.getTranslation('1_3_1_H43.ScopeAmbiguous'),
              'H43.ScopeAmbiguous'
            ),
            (n = null))
        for (i = 0; i < t.wrongHeaders.length; i++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.wrongHeaders[i].element,
            _global.HTMLCS.getTranslation('1_3_1_H43.IncorrectAttr')
              .replace(/\{\{expected\}\}/g, t.wrongHeaders[i].expected)
              .replace(/\{\{actual\}\}/g, t.wrongHeaders[i].actual),
            'H43.IncorrectAttr'
          )
        !0 === t.required &&
          !1 === t.allowScope &&
          (!1 === t.used
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('1_3_1_H43.HeadersRequired'),
                'H43.HeadersRequired'
              )
            : (0 < t.missingThId.length &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_H43.MissingHeaderIds'),
                  'H43.MissingHeaderIds'
                ),
              0 < t.missingTd.length &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_H43.MissingHeadersAttrs'),
                  'H43.MissingHeadersAttrs'
                ))),
          !0 === t.required &&
            !0 === t.allowScope &&
            !1 === t.correct &&
            !1 === n.correct &&
            (!1 === n.used && !1 === t.used
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_H43,H63'),
                  'H43,H63'
                )
              : !1 === n.used && (0 < t.missingThId.length || 0 < t.missingTd.length)
                ? (0 < t.missingThId.length &&
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('1_3_1_H43.MissingHeaderIds'),
                      'H43.MissingHeaderIds'
                    ),
                  0 < t.missingTd.length &&
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('1_3_1_H43.MissingHeadersAttrs'),
                      'H43.MissingHeadersAttrs'
                    ))
                : 0 < n.missing.length && !1 === t.used
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('1_3_1_H63.1'),
                      'H63.1'
                    )
                  : 0 < n.missing.length &&
                    (0 < t.missingThId.length || 0 < t.missingTd.length) &&
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('1_3_1_H43,H63'),
                      'H43,H63'
                    ))
      },
      _testTableScopeAttrs: function (e) {
        var t = { th: e.getElementsByTagName('th'), td: e.getElementsByTagName('td') },
          n = { used: !1, correct: !0, missing: [], invalid: [], obsoleteTd: [] }
        for (var i in t)
          for (var a = 0; a < t[i].length; a++) {
            var o = t[i][a],
              r = ''
            !0 === o.hasAttribute('scope') &&
              ((n.used = !0), o.getAttribute('scope') && (r = o.getAttribute('scope'))),
              'th' === o.nodeName.toLowerCase()
                ? !0 === /^\s*$/.test(r)
                  ? ((n.correct = !1), n.missing.push(o))
                  : !1 === /^(row|col|rowgroup|colgroup)$/.test(r) &&
                    ((n.correct = !1), n.invalid.push(o))
                : '' !== r &&
                  (n.obsoleteTd.push(o),
                  !1 === /^(row|col|rowgroup|colgroup)$/.test(r) &&
                    ((n.correct = !1), n.invalid.push(o)))
          }
        return n
      },
      testTableCaptionSummary: function (e) {
        var t = e.getAttribute('summary') || '',
          n = e.getElementsByTagName('caption'),
          i = ''
        0 < n.length && (i = n[0].innerHTML.replace(/^\s*(.*?)\s*$/g, '$1'))
        var a = HTMLCS.util.getDocumentType(e.ownerDocument)
        a &&
          -1 === a.indexOf('html5') &&
          ('' !== (t = t.replace(/^\s*(.*?)\s*$/g, '$1'))
            ? !0 === HTMLCS.util.isLayoutTable(e)
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_H73.3.LayoutTable'),
                  'H73.3.LayoutTable'
                )
              : (i === t &&
                  HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    e,
                    _global.HTMLCS.getTranslation('1_3_1_H39,H73.4'),
                    'H39,H73.4'
                  ),
                HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_H73.3.Check'),
                  'H73.3.Check'
                ))
            : !1 === HTMLCS.util.isLayoutTable(e) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation('1_3_1_H73.3.NoSummary'),
                'H73.3.NoSummary'
              )),
          '' !== i
            ? !0 === HTMLCS.util.isLayoutTable(e)
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_H39.3.LayoutTable'),
                  'H39.3.LayoutTable'
                )
              : HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  e,
                  _global.HTMLCS.getTranslation('1_3_1_H39.3.Check'),
                  'H39.3.Check'
                )
            : !1 === HTMLCS.util.isLayoutTable(e) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation('1_3_1_H39.3.NoCaption'),
                'H39.3.NoCaption'
              )
      },
      testFieldsetLegend: function (e) {
        var t = e.querySelector('legend')
        ;(null !== t && t.parentNode === e) ||
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            e,
            _global.HTMLCS.getTranslation('1_3_1_H71.NoLegend'),
            'H71.NoLegend'
          )
      },
      testOptgroup: function (e) {
        null === e.querySelector('optgroup') &&
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            e,
            _global.HTMLCS.getTranslation('1_3_1_H85.2'),
            'H85.2'
          )
      },
      testRequiredFieldsets: function (e) {
        for (
          var t = e.querySelectorAll('input[type=radio], input[type=checkbox]'), n = {}, i = 0;
          i < t.length;
          i++
        ) {
          var a = t[i]
          if (!0 === a.hasAttribute('name')) {
            for (
              var o = a.getAttribute('name'), r = a.parentNode;
              'fieldset' !== r.nodeName.toLowerCase() && null !== r && r !== e;

            )
              r = r.parentNode
            'fieldset' !== r.nodeName.toLowerCase() && (r = null)
          }
          if (void 0 === n[o]) n[o] = r
          else if (null === r || r !== n[o]) {
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              e,
              _global.HTMLCS.getTranslation('1_3_1_H71.SameName'),
              'H71.SameName'
            )
            break
          }
        }
      },
      testListsWithBreaks: function (e) {
        var t = []
        if (null !== e.querySelector('br')) {
          for (var n = [], i = 0; i < e.childNodes.length; i++) n.push(e.childNodes[i])
          for (var a = []; 0 < n.length; ) {
            var o = n.shift()
            if (1 === o.nodeType)
              if ('br' === o.nodeName.toLowerCase())
                t.push(a.join(' ').replace(/^\s*(.*?)\s*$/g, '$1')), (a = [])
              else for (i = o.childNodes.length - 1; 0 <= i; --i) n.unshift(o.childNodes[i])
            else 3 === o.nodeType && a.push(o.nodeValue)
          }
          0 < a.length && t.push(a.join(' ').replace(/^\s*(.*?)\s*$/g, '$1'))
          for (i = 0; i < t.length; i++) {
            if (!0 === /^[-*]\s+/.test(t[0])) {
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation('1_3_1_H48.1'),
                'H48.1'
              )
              break
            }
            if (!0 === /^\d+[:/\-.]?\s+/.test(t[0])) {
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation('1_3_1_H48.2'),
                'H48.2'
              )
              break
            }
          }
        }
      },
      testHeadingOrder: function (e, t) {
        for (
          var n = 0, i = HTMLCS.util.getAllElements(e, 'h1, h2, h3, h4, h5, h6'), a = 0;
          a < i.length;
          a++
        ) {
          var o = parseInt(i[a].nodeName.substr(1, 1))
          1 < o - n &&
            (0 === n &&
              HTMLCS.addMessage(
                t,
                i[a],
                _global.HTMLCS.getTranslation('1_3_1_G141_a').replace(/\{\{headingNum\}\}/g, o),
                'G141'
              ),
            HTMLCS.addMessage(
              t,
              i[a],
              _global.HTMLCS.getTranslation('1_3_1_G141_b')
                .replace(/\{\{headingNum\}\}/g, o)
                .replace(/\{\{properHeadingNum\}\}/g, n + 1),
              'G141'
            )),
            (n = o)
        }
      },
      testEmptyHeading: function (e) {
        var t = HTMLCS.util.getElementTextContent(e, !0)
        !0 === /^\s*$/.test(t) &&
          HTMLCS.addMessage(HTMLCS.ERROR, e, _global.HTMLCS.getTranslation('1_3_1_H42.2'), 'H42.2')
      },
      testUnstructuredNavLinks: function (e) {
        for (
          var t = 0, n = e.childNodes, i = 0;
          i < n.length && !(1 === n[i].nodeType && 'a' === n[i].nodeName.toLowerCase() && 1 < ++t);
          i++
        );
        if (1 < t) {
          for (
            var a = e.parentNode;
            null !== a && 'ul' !== a.nodeName.toLowerCase() && 'ol' !== a.nodeName.toLowerCase();

          )
            a = a.parentNode
          null === a &&
            HTMLCS.addMessage(HTMLCS.WARNING, e, _global.HTMLCS.getTranslation('1_3_1_H48'), 'H48')
        }
      },
      testGeneralTable: function (e) {
        !0 === HTMLCS.util.isLayoutTable(e)
          ? HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation('1_3_1_LayoutTable'),
              'LayoutTable'
            )
          : HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation('1_3_1_DataTable'),
              'DataTable'
            )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_2 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('1_3_2_G57'), 'G57')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_3 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('1_3_3_G96'), 'G96')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_4 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('1_3_4.RestrictView'), '')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_5 = {
      register: function () {
        return ['_top', 'input', 'select', 'textarea']
      },
      checkValidAttributes: function (e) {
        var t = [
            'additional-name',
            'address-level1',
            'address-level2',
            'address-level3',
            'address-level4',
            'address-line1',
            'address-line2',
            'address-line3',
            'bday',
            'bday-year',
            'bday-day',
            'bday-month',
            'billing',
            'cc-additional-name',
            'cc-csc',
            'cc-exp',
            'cc-exp-month',
            'cc-exp-year',
            'cc-family-name',
            'cc-given-name',
            'cc-name',
            'cc-number',
            'cc-type',
            'country',
            'country-name',
            'current-password',
            'email',
            'family-name',
            'fax',
            'given-name',
            'home',
            'honorific-prefix',
            'honorific-suffix',
            'impp',
            'language',
            'mobile',
            'name',
            'new-password',
            'nickname',
            'off',
            'on',
            'organization',
            'organization-title',
            'pager',
            'photo',
            'postal-code',
            'sex',
            'shipping',
            'street-address',
            'tel-area-code',
            'tel',
            'tel-country-code',
            'tel-extension',
            'tel-local',
            'tel-local-prefix',
            'tel-local-suffix',
            'tel-national',
            'transaction-amount',
            'transaction-currency',
            'url',
            'username',
            'work',
          ],
          n = e.getAttribute('autocomplete')
        if ('string' == typeof n) {
          for (var i = n.split(' '), a = !1, o = 0; o < i.length; o++) {
            i[o] = i[o].trim()
            var r = i[o]
            ;-1 === t.indexOf(r) && 0 !== r.indexOf('section-') && (a = !0)
          }
          !0 === a &&
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              e,
              _global.HTMLCS.getTranslation('1_3_5_H98.FaultyValue').replace(
                /\{\{valuesStr\}\}/g,
                n
              ),
              'H98'
            )
        }
      },
      checkControlGroups: function (e) {
        for (
          var t = [
              'name',
              'honorific-prefix',
              'given-name',
              'additional-name',
              'family-name',
              'honorific-suffix',
              'nickname',
              'organization-title',
              'username',
              'organization',
              'address-line1',
              'address-line2',
              'address-line3',
              'address-level4',
              'address-level3',
              'address-level2',
              'address-level1',
              'country',
              'country-name',
              'postal-code',
              'cc-name',
              'cc-given-name',
              'cc-additional-name',
              'cc-family-name',
              'cc-number',
              'cc-csc',
              'cc-type',
              'transaction-currency',
              'language',
              'sex',
              'tel-country-code',
              'tel-national',
              'tel-area-code',
              'tel-local',
              'tel-local-prefix',
              'tel-local-suffix',
              'tel-extension',
            ],
            n =
              ('INPUT' === e.tagName && 'hidden' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'text' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'search' === e.getAttribute('type')) ||
              'TEXTAREA' === e.tagName ||
              'SELECT' === e.tagName,
            i = ['street-address'],
            a =
              ('INPUT' === e.tagName && 'hidden' === e.getAttribute('type')) ||
              'TEXTAREA' === e.tagName ||
              'SELECT' === e.tagName,
            o = ['new-password', 'current-password'],
            r =
              ('INPUT' === e.tagName && 'hidden' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'text' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'search' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'password' === e.getAttribute('type')) ||
              'TEXTAREA' === e.tagName ||
              'SELECT' === e.tagName,
            s = ['url', 'photo', 'impp'],
            l =
              ('INPUT' === e.tagName && 'hidden' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'text' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'search' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'email' === e.getAttribute('type')) ||
              'TEXTAREA' === e.tagName ||
              'SELECT' === e.tagName,
            d = ['tel'],
            u =
              ('INPUT' === e.tagName && 'hidden' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'text' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'search' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'tel' === e.getAttribute('type')) ||
              'TEXTAREA' === e.tagName ||
              'SELECT' === e.tagName,
            _ = [
              'cc-exp-month',
              'cc-exp-year',
              'transaction-amount',
              'bday-day',
              'bday-month',
              'bday-year',
            ],
            c =
              ('INPUT' === e.tagName && 'hidden' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'text' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'search' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'number' === e.getAttribute('type')) ||
              'TEXTAREA' === e.tagName ||
              'SELECT' === e.tagName,
            m = ['cc-exp'],
            g =
              ('INPUT' === e.tagName && 'hidden' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'text' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'search' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'month' === e.getAttribute('type')) ||
              'TEXTAREA' === e.tagName ||
              'SELECT' === e.tagName,
            p = ['bday'],
            h =
              ('INPUT' === e.tagName && 'hidden' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'text' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'search' === e.getAttribute('type')) ||
              ('INPUT' === e.tagName && 'date' === e.getAttribute('type')) ||
              'TEXTAREA' === e.tagName ||
              'SELECT' === e.tagName,
            b = e.getAttribute('autocomplete').split(' '),
            f = 0;
          f < b.length;
          f++
        ) {
          b[f] = b[f].trim()
          var C = b[f]
          ;-1 < t.indexOf(C) &&
            !n &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation('1_3_5_H98.InvalidAutoComplete_Text').replace(
                /\{\{x\}\}/g,
                C
              ),
              'H98'
            ),
            -1 < i.indexOf(C) &&
              !a &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('1_3_5_H98.InvalidAutoComplete_Multiline').replace(
                  /\{\{x\}\}/g,
                  C
                ),
                'H98'
              ),
            -1 < o.indexOf(C) &&
              !r &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('1_3_5_H98.InvalidAutoComplete_Password').replace(
                  /\{\{x\}\}/g,
                  C
                ),
                'H98'
              ),
            -1 < s.indexOf(C) &&
              !l &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('1_3_5_H98.InvalidAutoComplete_Url').replace(
                  /\{\{x\}\}/g,
                  C
                ),
                'H98'
              ),
            -1 < d.indexOf(C) &&
              !u &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('1_3_5_H98.InvalidAutoComplete_Telephone').replace(
                  /\{\{x\}\}/g,
                  C
                ),
                'H98'
              ),
            -1 < _.indexOf(C) &&
              !c &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('1_3_5_H98.InvalidAutoComplete_Numeric').replace(
                  /\{\{x\}\}/g,
                  C
                ),
                'H98'
              ),
            -1 < m.indexOf(C) &&
              !g &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('1_3_5_H98.InvalidAutoComplete_Month').replace(
                  /\{\{x\}\}/g,
                  C
                ),
                'H98'
              ),
            -1 < p.indexOf(C) &&
              !h &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('1_3_5_H98.InvalidAutoComplete_Date').replace(
                  /\{\{x\}\}/g,
                  C
                ),
                'H98'
              )
        }
      },
      process: function (e, t) {
        if (e === t)
          for (var n = HTMLCS.util.getAllElements(e, '*[autocomplete]'), i = 0; i < n.length; i++) {
            var a = n[i]
            this.checkValidAttributes(a), this.checkControlGroups(a)
          }
        else {
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            _global.HTMLCS.getTranslation('1_3_5_H98.Purpose'),
            'H98'
          )
          if (
            -1 <
            ['hidden', 'checkbox', 'radio', 'file', 'submit', 'image', 'reset', 'button'].indexOf(
              e.getAttribute('type')
            )
          )
            return
          !1 === e.hasAttribute('autocomplete') &&
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation('1_3_5_H98.MissingAutocomplete'),
              'H98'
            )
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_6 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('1_3_6_ARIA11.Check'),
          'ARIA11'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_1 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('1_4_1_G14,G18'),
          'G14,G182'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_10 = {
      register: function () {
        return ['_top', 'pre', 'meta']
      },
      process: function (e, t) {
        if (e === t) {
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('1_4_10_C32,C31,C33,C38,SCR34,G206.Check'),
            'C32,C31,C33,C38,SCR34,G206'
          )
          for (var n = HTMLCS.util.getAllElements(t, '*'), i = 0; i < n.length; i++) {
            var a = n[i]
            'fixed' == window.getComputedStyle(a, null).getPropertyValue('position') &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                a,
                _global.HTMLCS.getTranslation('1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed'),
                'C32,C31,C33,C38,SCR34,G206'
              )
          }
        } else {
          switch (e.nodeName.toLowerCase()) {
            case 'pre':
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                t,
                _global.HTMLCS.getTranslation('1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling'),
                'C32,C31,C33,C38,SCR34,G206'
              )
              break
            case 'meta':
              var o = e.getAttribute('content')
              'viewport' === e.getAttribute('name') &&
                o &&
                (-1 < o.indexOf('maximum-scale') ||
                  -1 < o.indexOf('minimum-scale') ||
                  -1 < o.indexOf('user-scalable=no') ||
                  -1 < o.indexOf('user-scalable=0')) &&
                HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  e,
                  _global.HTMLCS.getTranslation('1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom'),
                  'C32,C31,C33,C38,SCR34,G206'
                )
          }
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_11 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('1_4_11_G195,G207,G18,G145,G174,F78.Check'),
          'G195,G207,G18,G145,G174,F78'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_12 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('1_4_12_C36,C35.Check'),
          'C36,C35'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_13 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('1_4_13_F95.Check'),
          'F95'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_2 = {
      register: function () {
        return ['object', 'embed', 'applet', 'bgsound', 'audio', 'video']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('1_4_2_F23'), 'F23')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast = {
      testContrastRatio: function (e, t, n) {
        var i = []
        if (e.ownerDocument) a = [e]
        else {
          var a = [],
            o = e.getElementsByTagName('body')
          if (o.length) var a = [o[0]]
        }
        for (; 0 < a.length; ) {
          var r = a.shift()
          if (
            r &&
            1 === r.nodeType &&
            !1 === HTMLCS.util.isVisuallyHidden(r) &&
            !1 === HTMLCS.util.isDisabled(r)
          ) {
            for (var s = !1, l = 0; l < r.childNodes.length; l++)
              1 === r.childNodes[l].nodeType
                ? a.push(r.childNodes[l])
                : 3 === r.childNodes[l].nodeType &&
                  '' !== HTMLCS.util.trim(r.childNodes[l].nodeValue) &&
                  (s = !0)
            if (!0 === s) {
              var d = HTMLCS.util.style(r)
              if (d) {
                var u = d.backgroundColor,
                  _ = d.color,
                  c = !1,
                  m = !1
                'none' !== d.backgroundImage && (c = !0), 'absolute' == d.position && (m = !0)
                var g = r.parentNode,
                  p = 0.75 * parseFloat(d.fontSize, 10),
                  h = 18
                if ('bold' === d.fontWeight || 600 <= parseInt(d.fontWeight, 10)) h = 14
                var b = t
                for (
                  h <= p && (b = n);
                  ('transparent' === u || 'rgba(0, 0, 0, 0)' === u) && g && g.ownerDocument;

                ) {
                  var f = HTMLCS.util.style(g)
                  u = f.backgroundColor
                  'none' !== f.backgroundImage && (c = !0), 'absolute' == f.position && (m = !0)
                  var C = HTMLCS.util.style(g, ':before')
                  if (
                    C &&
                    'fixed' == C.position &&
                    'transform' == C.willChange &&
                    C.width == f.width &&
                    parseInt(C.height, 10) <= parseInt(f.height, 10) &&
                    'none' !== C.backgroundImage
                  ) {
                    c = !0
                    break
                  }
                  g = g.parentNode
                }
                var v = HTMLCS.util.colourStrToRGB(u).alpha,
                  H = HTMLCS.util.colourStrToRGB(_).alpha
                if (u && v < 1 && 0 < v) {
                  i.push({
                    element: r,
                    colour: _,
                    bgColour: u,
                    value: void 0,
                    required: b,
                    hasAlpha: !0,
                  })
                  continue
                }
                if (_ && H < 1 && 0 < H) {
                  i.push({
                    element: r,
                    colour: _,
                    bgColour: _,
                    value: void 0,
                    required: b,
                    hasAlpha: !0,
                  })
                  continue
                }
                if (!0 === c) {
                  i.push({
                    element: r,
                    colour: _,
                    bgColour: void 0,
                    value: void 0,
                    required: b,
                    hasBgImage: !0,
                  })
                  continue
                }
                if (!0 === m) {
                  i.push({
                    element: r,
                    colour: _,
                    bgColour: void 0,
                    value: void 0,
                    required: b,
                    isAbsolute: !0,
                  })
                  continue
                }
                if ('transparent' === u || 'rgba(0, 0, 0, 0)' === u) continue
                var T = HTMLCS.util.contrastRatio(u, _)
                if (T < b) {
                  var y = this.recommendColour(u, _, b)
                  i.push({
                    element: r,
                    colour: d.color,
                    bgColour: u,
                    value: T,
                    required: b,
                    recommendation: y,
                  })
                }
              }
            }
          }
        }
        return i
      },
      recommendColour: function (e, t, n) {
        ;(t = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(t))),
          (e = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(e)))
        var i = HTMLCS.util.contrastRatio(t, e),
          a = Math.abs(HTMLCS.util.relativeLum(t) - 0.5),
          o = Math.abs(HTMLCS.util.relativeLum(e) - 0.5),
          r = null
        if (i < n) {
          var s = 1.0025
          if (a <= o) {
            var l = 'back',
              d = e
            if (HTMLCS.util.relativeLum(e) < 0.5) s = 1 / s
          } else {
            ;(l = 'fore'), (d = t)
            if (HTMLCS.util.relativeLum(t) < 0.5) s = 1 / s
          }
          for (var u = HTMLCS.util.sRGBtoHSV(d), _ = t, c = e, m = !1, g = 0; i < n; ) {
            if ('#fff' === d || '#000' === d)
              if (!0 === m)
                if ('fore' === l)
                  for (var p = c, h = 1; c === p; ) {
                    c = this.multiplyColour(c, Math.pow(1 / s, h))
                    h++
                  }
                else {
                  var b = _
                  for (h = 1; _ === b; ) {
                    _ = this.multiplyColour(_, Math.pow(1 / s, h))
                    h++
                  }
                }
              else {
                if (((_ = t), (c = e), (s = 1 / s), 'fore' === l)) {
                  l = 'back'
                  u = e
                } else {
                  l = 'fore'
                  u = t
                }
                ;(u = HTMLCS.util.sRGBtoHSV(u)), (m = !0)
              }
            g++
            ;(d = HTMLCS.util.HSVtosRGB(u)), (d = this.multiplyColour(d, Math.pow(s, g)))
            if ('fore' === l) _ = d
            else c = d
            i = HTMLCS.util.contrastRatio(_, c)
          }
          r = { fore: { from: t, to: _ }, back: { from: e, to: c } }
        }
        return r
      },
      multiplyColour: function (e, t) {
        var n = HTMLCS.util.sRGBtoHSV(e),
          i = n.saturation * n.value
        return (
          0 === n.value && (n.value = 1 / 255),
          (n.value = n.value * t),
          0 === n.value ? (n.saturation = 0) : (n.saturation = i / n.value),
          (n.value = Math.min(1, n.value)),
          (n.saturation = Math.min(1, n.saturation)),
          HTMLCS.util.RGBtoColourStr(HTMLCS.util.HSVtosRGB(n))
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_F24 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        for (var n = HTMLCS.util.getAllElements(t, '*'), i = 0; i < n.length; i++)
          this.testColourComboFail(n[i])
      },
      testColourComboFail: function (e) {
        var t = e.hasAttribute('color')
        t =
          (t = (t = t || e.hasAttribute('link')) || e.hasAttribute('vlink')) ||
          e.hasAttribute('alink')
        var n = e.hasAttribute('bgcolor')
        if (e.style) {
          var i = e.style.color,
            a = e.style.background
          '' !== i && 'auto' !== i && (t = !0), '' !== a && 'auto' !== a && (n = !0)
        }
        n !== t &&
          (!0 === n
            ? HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation('1_4_3_F24.BGColour'),
                'F24.BGColour'
              )
            : HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation('1_4_3_F24.FGColour'),
                'F24.FGColour'
              ))
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        if (e === t)
          for (
            var n = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(
                t,
                4.5,
                3
              ),
              i = 0;
            i < n.length;
            i++
          ) {
            e = n[i].element
            for (
              var a = 2,
                o = Math.round(n[i].value * Math.pow(10, a)) / Math.pow(10, a),
                r = n[i].required,
                s = n[i].recommendation,
                l = n[i].hasBgImage || !1,
                d = n[i].isAbsolute || !1,
                u = n[i].hasAlpha || !1;
              r === o;

            )
              a++, (o = Math.round(n[i].value * Math.pow(10, a)) / Math.pow(10, a))
            if (4.5 === r) var _ = 'G18'
            else if (3 === r) _ = 'G145'
            var c = []
            s &&
              (s.fore.from !== s.fore.to &&
                c.push(
                  _global.HTMLCS.getTranslation(
                    '1_4_3_G18_or_G145.Fail.Recomendation.Text'
                  ).replace(/\{\{value\}\}/g, s.fore.to)
                ),
              s.back.from !== s.back.to &&
                c.push(
                  _global.HTMLCS.getTranslation(
                    '1_4_3_G18_or_G145.Fail.Recomendation.Background'
                  ).replace(/\{\{value\}\}/g, s.back.to)
                )),
              0 < c.length &&
                (c =
                  ' ' +
                  _global.HTMLCS.getTranslation('1_4_3_G18_or_G145.Fail.Recomendation') +
                  ' ' +
                  c.join(', ') +
                  '.'),
              !0 === d
                ? ((_ += '.Abs'),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation('1_4_3_G18_or_G145.Abs').replace(
                      /\{\{required\}\}/g,
                      r
                    ),
                    _
                  ))
                : !0 === l
                  ? ((_ += '.BgImage'),
                    HTMLCS.addMessage(
                      HTMLCS.WARNING,
                      e,
                      _global.HTMLCS.getTranslation('1_4_3_G18_or_G145.BgImage').replace(
                        /\{\{required\}\}/g,
                        r
                      ),
                      _
                    ))
                  : !0 === u
                    ? ((_ += '.Alpha'),
                      HTMLCS.addMessage(
                        HTMLCS.WARNING,
                        e,
                        _global.HTMLCS.getTranslation('1_4_3_G18_or_G145.Alpha').replace(
                          /\{\{required\}\}/g,
                          r
                        ),
                        _
                      ))
                    : ((_ += '.Fail'),
                      HTMLCS.addMessage(
                        HTMLCS.ERROR,
                        e,
                        _global.HTMLCS.getTranslation('1_4_3_G18_or_G145.Fail')
                          .replace(/\{\{required\}\}/g, r)
                          .replace(/\{\{value\}\}/g, o) + c,
                        _
                      ))
          }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('1_4_4_G142'), 'G142')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_5 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        null !== t.querySelector('img') &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('1_4_5_G140,C22,C30.AALevel'),
            'G140,C22,C30.AALevel'
          )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_6 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        if (e === t)
          for (
            var n = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(
                t,
                7,
                4.5
              ),
              i = 0;
            i < n.length;
            i++
          ) {
            e = n[i].element
            for (
              var a = 2,
                o = Math.round(n[i].value * Math.pow(10, a)) / Math.pow(10, a),
                r = n[i].required,
                s = n[i].recommendation,
                l = n[i].hasBgImage || !1,
                d = n[i].isAbsolute || !1;
              r === o;

            )
              a++, (o = Math.round(n[i].value * Math.pow(10, a)) / Math.pow(10, a))
            if (4.5 === r) var u = 'G18'
            else if (7 === r) u = 'G17'
            var _ = []
            s &&
              (s.fore.from !== s.fore.to &&
                _.push(
                  _global.HTMLCS.getTranslation('1_4_6_G18_or_G17.Fail.Recomendation.Text').replace(
                    /\{\{value\}\}/g,
                    s.fore.to
                  )
                ),
              s.back.from !== s.back.to &&
                _.push(
                  _global.HTMLCS.getTranslation(
                    '1_4_6_G18_or_G17.Fail.Recomendation.Background'
                  ).replace(/\{\{value\}\}/g, s.back.to)
                )),
              0 < _.length &&
                (_ =
                  ' ' +
                  _global.HTMLCS.getTranslation('1_4_6_G18_or_G17.Fail.Recomendation') +
                  ' ' +
                  _.join(', ') +
                  '.'),
              !0 === d
                ? ((u += '.Abs'),
                  HTMLCS.addMessage(
                    HTMLCS.WARNING,
                    e,
                    _global.HTMLCS.getTranslation('1_4_6_G18_or_G17.Abs').replace(
                      /\{\{required\}\}/g,
                      r
                    ),
                    u
                  ))
                : !0 === l
                  ? ((u += '.BgImage'),
                    HTMLCS.addMessage(
                      HTMLCS.WARNING,
                      e,
                      _global.HTMLCS.getTranslation('1_4_6_G18_or_G17.BgImage').replace(
                        /\{\{required\}\}/g,
                        r
                      ),
                      u
                    ))
                  : ((u += '.Fail'),
                    HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('1_4_6_G18_or_G17.Fail')
                        .replace(/\{\{required\}\}/g, r)
                        .replace(/\{\{value\}\}/g, o) + _,
                      u
                    ))
          }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_7 = {
      register: function () {
        return ['object', 'embed', 'applet', 'bgsound', 'audio']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, e, _global.HTMLCS.getTranslation('1_4_7_G56'), 'G56')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_8 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('1_4_8_G148,G156,G175'),
          'G148,G156,G175'
        ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('1_4_8_H87,C20'),
            'H87,C20'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('1_4_8_C19,G172,G169'),
            'C19,G172,G169'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('1_4_8_G188,C21'),
            'G188,C21'
          ),
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('1_4_8_H87,G146,C26'),
            'H87,G146,C26'
          )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_9 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        null !== t.querySelector('img') &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('1_4_9_G140,C22,C30.NoException'),
            'G140,C22,C30.NoException'
          )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_1 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        if (e === t) {
          HTMLCS.util
            .getAllElements(
              t,
              '*[onclick], *[onkeyup], *[onkeydown], *[onkeypress], *[onfocus], *[onblur]'
            )
            .forEach(function (e) {
              !1 === HTMLCS.util.isKeyboardNavigable(e) &&
                HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  e,
                  _global.HTMLCS.getTranslation('2_1_1_G90'),
                  'G90'
                )
            })
          for (var n = HTMLCS.util.getAllElements(t, '*[ondblclick]'), i = 0; i < n.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              n[i],
              _global.HTMLCS.getTranslation('2_1_1_SCR20.DblClick'),
              'SCR20.DblClick'
            )
          var a = HTMLCS.util.getAllElements(t, '*[onmouseover]')
          for (i = 0; i < a.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              a[i],
              _global.HTMLCS.getTranslation('2_1_1_SCR20.MouseOver'),
              'SCR20.MouseOver'
            )
          var o = HTMLCS.util.getAllElements(t, '*[onmouseout]')
          for (i = 0; i < o.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              o[i],
              _global.HTMLCS.getTranslation('2_1_1_SCR20.MouseOut'),
              'SCR20.MouseOut'
            )
          var r = HTMLCS.util.getAllElements(t, '*[onmousemove]')
          for (i = 0; i < r.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              r[i],
              _global.HTMLCS.getTranslation('2_1_1_SCR20.MouseMove'),
              'SCR20.MouseMove'
            )
          var s = HTMLCS.util.getAllElements(t, '*[onmousedown]')
          for (i = 0; i < s.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              s[i],
              _global.HTMLCS.getTranslation('2_1_1_SCR20.MouseDown'),
              'SCR20.MouseDown'
            )
          var l = HTMLCS.util.getAllElements(t, '*[onmouseup]')
          for (i = 0; i < l.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              l[i],
              _global.HTMLCS.getTranslation('2_1_1_SCR20.MouseUp'),
              'SCR20.MouseUp'
            )
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_2 = {
      register: function () {
        return ['object', 'applet', 'embed']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.WARNING, e, _global.HTMLCS.getTranslation('2_1_2_F10'), 'F10')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_4 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('2_1_4.Check'), '')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_1 = {
      register: function () {
        return ['meta']
      },
      process: function (e, t) {
        !0 === e.hasAttribute('http-equiv') &&
          'refresh' === String(e.getAttribute('http-equiv')).toLowerCase() &&
          !0 === /^[1-9]\d*/.test(e.getAttribute('content').toLowerCase()) &&
          (!0 === /url=/.test(e.getAttribute('content').toLowerCase())
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('2_2_1_F40.2'),
                'F40.2'
              )
            : HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('2_2_1_F41.2'),
                'F41.2'
              ))
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_2 = {
      register: function () {
        return ['_top', 'blink']
      },
      process: function (e, t) {
        if (e === t) {
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            e,
            _global.HTMLCS.getTranslation('2_2_2_SCR33,SCR22,G187,G152,G186,G191'),
            'SCR33,SCR22,G187,G152,G186,G191'
          )
          for (var n = HTMLCS.util.getAllElements(t, '*'), i = 0; i < n.length; i++) {
            var a = HTMLCS.util.style(n[i])
            a &&
              !0 === /blink/.test(a['text-decoration']) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                n[i],
                _global.HTMLCS.getTranslation('2_2_2_F4'),
                'F4'
              )
          }
        } else
          'blink' === e.nodeName.toLowerCase() &&
            HTMLCS.addMessage(HTMLCS.ERROR, e, _global.HTMLCS.getTranslation('2_2_2_F47'), 'F47')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_3 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, e, _global.HTMLCS.getTranslation('2_2_3_G5'), 'G5')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_4 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, e, _global.HTMLCS.getTranslation('2_2_4_SCR14'), 'SCR14')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_5 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('2_2_5_G105,G181'),
          'G105,G181'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_6 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('2_2_6.Check'), '')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_1 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('2_3_1_G19,G176'),
          'G19,G176'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_2 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('2_3_2_G19'), 'G19')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_3 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('2_3_3.Check'), 'C39')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_1 = {
      register: function () {
        return ['iframe', 'a', 'area', '_top']
      },
      process: function (e, t) {
        if (e === t) this.testGenericBypassMsg(t)
        else
          switch (e.nodeName.toLowerCase()) {
            case 'iframe':
              this.testIframeTitle(e)
              break
            case 'a':
            case 'area':
              this.testSameDocFragmentLinks(e, t)
          }
      },
      testIframeTitle: function (e) {
        if ('iframe' === e.nodeName.toLowerCase()) {
          var t = !1
          !0 === e.hasAttribute('title') &&
            e.getAttribute('title') &&
            !1 === /^\s+$/.test(e.getAttribute('title')) &&
            (t = !0),
            !1 === t
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  e,
                  _global.HTMLCS.getTranslation('2_4_1_H64.1'),
                  'H64.1'
                )
              : HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  e,
                  _global.HTMLCS.getTranslation('2_4_1_H64.2'),
                  'H64.2'
                )
        }
      },
      testGenericBypassMsg: function (e) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('2_4_1_G1,G123,G124,H69'),
          'G1,G123,G124,H69'
        )
      },
      testSameDocFragmentLinks: function (e, t) {
        if (!0 === e.hasAttribute('href') && !0 === HTMLCS.util.isFocusable(e)) {
          var n = e.getAttribute('href')
          if (1 < (n = HTMLCS.util.trim(n)).length && '#' === n.charAt(0)) {
            var i = n.substr(1)
            try {
              var a = t
              a.ownerDocument && (a = a.ownerDocument)
              var o = a.getElementById(i)
              if (null === o) {
                var r = HTMLCS.util.getElementWindow(t).document,
                  s = HTMLCS.util.getDocumentType(r),
                  l = 'a'
                s && -1 === s.indexOf('html5') && (l = '*'),
                  (o = a.querySelector(l + '[name="' + i + '"]'))
              }
              ;(null !== o && !1 !== HTMLCS.util.contains(t, o)) ||
                (!0 === HTMLCS.isFullDoc(t) || 'body' === t.nodeName.toLowerCase()
                  ? HTMLCS.addMessage(
                      HTMLCS.ERROR,
                      e,
                      _global.HTMLCS.getTranslation('2_4_1_G1,G123,G124.NoSuchID').replace(
                        /\{\{id\}\}/g,
                        i
                      ),
                      'G1,G123,G124.NoSuchID'
                    )
                  : HTMLCS.addMessage(
                      HTMLCS.WARNING,
                      e,
                      _global.HTMLCS.getTranslation('2_4_1_G1,G123,G124.NoSuchIDFragment').replace(
                        /\{\{id\}\}/g,
                        i
                      ),
                      'G1,G123,G124.NoSuchIDFragment'
                    ))
            } catch (e) {}
          }
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2 = {
      register: function () {
        return ['html']
      },
      process: function (e, t) {
        for (var n = e.childNodes, i = null, a = 0; a < n.length; a++)
          if ('head' === n[a].nodeName.toLowerCase()) {
            i = n[a]
            break
          }
        if (null === i)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            e,
            _global.HTMLCS.getTranslation('2_4_2_H25.1.NoHeadEl'),
            'H25.1.NoHeadEl'
          )
        else {
          n = i.childNodes
          var o = null
          for (a = 0; a < n.length; a++)
            if ('title' === n[a].nodeName.toLowerCase()) {
              o = n[a]
              break
            }
          null === o
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                i,
                _global.HTMLCS.getTranslation('2_4_2_H25.1.NoTitleEl'),
                'H25.1.NoTitleEl'
              )
            : !0 === /^\s*$/.test(o.innerHTML)
              ? HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  o,
                  _global.HTMLCS.getTranslation('2_4_2_H25.1.EmptyTitle'),
                  'H25.1.EmptyTitle'
                )
              : HTMLCS.addMessage(
                  HTMLCS.NOTICE,
                  o,
                  _global.HTMLCS.getTranslation('2_4_2_H25.2'),
                  'H25.2'
                )
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_3 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        e === t &&
          t.querySelector('*[tabindex]') &&
          HTMLCS.addMessage(HTMLCS.NOTICE, e, _global.HTMLCS.getTranslation('2_4_3_H4.2'), 'H4.2')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_4 = {
      register: function () {
        return ['a']
      },
      process: function (e, t) {
        !0 === e.hasAttribute('title')
          ? HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation('2_4_4_H77,H78,H79,H80,H81,H33'),
              'H77,H78,H79,H80,H81,H33'
            )
          : HTMLCS.addMessage(
              HTMLCS.NOTICE,
              e,
              _global.HTMLCS.getTranslation('2_4_4_H77,H78,H79,H80,H81'),
              'H77,H78,H79,H80,H81'
            )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_5 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('2_4_5_G125,G64,G63,G161,G126,G185'),
          'G125,G64,G63,G161,G126,G185'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_6 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('2_4_6_G130,G131'),
          'G130,G131'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        null !== t.querySelector('input, textarea, button, select, a') &&
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('2_4_7_G149,G165,G195,C15,SCR31'),
            'G149,G165,G195,C15,SCR31'
          )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8 = {
      register: function () {
        return ['link']
      },
      process: function (e, t) {
        'head' !== e.parentNode.nodeName.toLowerCase() &&
          HTMLCS.addMessage(HTMLCS.ERROR, e, _global.HTMLCS.getTranslation('2_4_8_H59.1'), 'H59.1'),
          (!1 !== e.hasAttribute('rel') &&
            e.getAttribute('rel') &&
            !0 !== /^\s*$/.test(e.getAttribute('rel'))) ||
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation('2_4_8_H59.2a'),
              'H59.2a'
            ),
          (!1 !== e.hasAttribute('href') &&
            e.getAttribute('href') &&
            !0 !== /^\s*$/.test(e.getAttribute('href'))) ||
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation('2_4_8_H59.2b'),
              'H59.2b'
            )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_9 = {
      register: function () {
        return ['a']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, e, _global.HTMLCS.getTranslation('2_4_9_H30'), 'H30')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_1 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('2_5_1.Check'), '')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_2 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        if (
          (HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('2_5_2.SinglePointer_Check'),
            ''
          ),
          e == t)
        ) {
          for (var n = HTMLCS.util.getAllElements(t, '*[onmousedown]'), i = 0; i < n.length; i++) {
            var a = n[i]
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              a,
              _global.HTMLCS.getTranslation('2_5_2.Mousedown_Check'),
              ''
            )
          }
          var o = HTMLCS.util.getAllElements(t, '*[ontouchstart]')
          for (i = 0; i < o.length; i++) {
            a = o[i]
            HTMLCS.addMessage(
              HTMLCS.NOTICE,
              a,
              _global.HTMLCS.getTranslation('2_5_2.Touchstart_Check'),
              ''
            )
          }
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_3 = {
      register: function () {
        return ['_top', 'a', 'button', 'label', 'input']
      },
      process: function (e, t) {
        if (e == t)
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            t,
            _global.HTMLCS.getTranslation('2_5_3_F96.Check'),
            'F96'
          )
        else {
          var n = '',
            i = ''
          switch (e.nodeName.toLowerCase()) {
            case 'a':
            case 'button':
              ;(n = HTMLCS.util.getTextContent(e)), (i = HTMLCS.util.getAccessibleName(e, t))
              break
            case 'label':
              n = HTMLCS.util.getTextContent(e)
              var a = e.getAttribute('for')
              if (a) {
                if (t.ownerDocument) var o = t.ownerDocument.getElementById(a)
                else o = t.getElementById(a)
                o && (i = HTMLCS.util.getAccessibleName(o, t))
              }
              break
            case 'input':
              'submit' === e.getAttribute('type') && (n = e.getAttribute('value')),
                (i = HTMLCS.util.getAccessibleName(e, t))
          }
          if (n && i) {
            var r = n.replace(/[^A-Za-z]/g, '').toLowerCase(),
              s = i.replace(/[^A-Za-z]/g, '').toLowerCase()
            r &&
              s &&
              -1 === s.indexOf(r) &&
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                e,
                _global.HTMLCS.getTranslation('2_5_3_F96.AccessibleName'),
                'F96'
              )
          }
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_4 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        if (
          (HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('2_5_4.Check'), ''),
          e == t)
        )
          for (
            var n = HTMLCS.util.getAllElements(e, '*[ondevicemotion]'), i = 0;
            i < n.length;
            i++
          ) {
            var a = n[i]
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              a,
              _global.HTMLCS.getTranslation('2_5_4.Devicemotion'),
              ''
            )
          }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_5 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('2_5_5.Check'), '')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_6 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('2_5_6.Check'), '')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1 = {
      register: function () {
        return ['html']
      },
      process: function (e, t) {
        if (!1 === e.hasAttribute('lang') && !1 === e.hasAttribute('xml:lang'))
          HTMLCS.addMessage(HTMLCS.ERROR, e, _global.HTMLCS.getTranslation('3_1_1_H57.2'), 'H57.2')
        else {
          if (!0 === e.hasAttribute('lang')) {
            var n = e.getAttribute('lang')
            !1 === this.isValidLanguageTag(n) &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                t,
                _global.HTMLCS.getTranslation('3_1_1_H57.3.Lang'),
                'H57.3.Lang'
              )
          }
          if (!0 === e.hasAttribute('xml:lang')) {
            n = e.getAttribute('xml:lang')
            !1 === this.isValidLanguageTag(n) &&
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                t,
                _global.HTMLCS.getTranslation('3_1_1_H57.3.XmlLang'),
                'H57.3.XmlLang'
              )
          }
        }
      },
      isValidLanguageTag: function (e) {
        var t = !0
        return (
          !1 ===
            new RegExp(
              '^([ix](-[a-z0-9]{1,8})+)$|^[a-z]{2,8}(-[a-z]{3}){0,3}(-[a-z]{4})?(-[a-z]{2}|-[0-9]{3})?(-[0-9][a-z0-9]{3}|-[a-z0-9]{5,8})*(-[a-wy-z0-9](-[a-z0-9]{2,8})+)*(-x(-[a-z0-9]{1,8})+)?$',
              'i'
            ).test(e) && (t = !1),
          t
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_2 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('3_1_2_H58'), 'H58')
        for (
          var n = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1,
            i = HTMLCS.util.getAllElements(t, '*[lang]'),
            a = 0;
          a <= i.length;
          a++
        ) {
          if (a === i.length) var o = t
          else o = i[a]
          if (!o.documentElement && 'html' !== o.nodeName.toLowerCase()) {
            if (!0 === o.hasAttribute('lang')) {
              var r = o.getAttribute('lang')
              !1 === n.isValidLanguageTag(r) &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  o,
                  _global.HTMLCS.getTranslation('3_1_2_H58.1.Lang'),
                  'H58.1.Lang'
                )
            }
            if (!0 === o.hasAttribute('xml:lang')) {
              r = o.getAttribute('xml:lang')
              !1 === n.isValidLanguageTag(r) &&
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  o,
                  _global.HTMLCS.getTranslation('3_1_2_H58.1.XmlLang'),
                  'H58.1.XmlLang'
                )
            }
          }
        }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_3 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('3_1_3_H40,H54,H60,G62,G70'),
          'H40,H54,H60,G62,G70'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_4 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('3_1_4_G102,G55,G62,H28,G97'),
          'G102,G55,G62,H28,G97'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_5 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation('3_1_5_G86,G103,G79,G153,G160'),
          'G86,G103,G79,G153,G160'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6 = {
      register: function () {
        return ['ruby']
      },
      process: function (e, t) {
        var n = e.querySelectorAll('rb')
        0 === e.querySelectorAll('rt').length &&
          (0 === n.length
            ? HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('3_1_6_H62.1.HTML5'),
                'H62.1.HTML5'
              )
            : HTMLCS.addMessage(
                HTMLCS.ERROR,
                e,
                _global.HTMLCS.getTranslation('3_1_6_H62.1.XHTML11'),
                'H62.1.XHTML11'
              )),
          0 === e.querySelectorAll('rp').length &&
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              e,
              _global.HTMLCS.getTranslation('3_1_6_H62.2'),
              'H62.2'
            )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_1 = {
      register: function () {
        return ['input', 'textarea', 'button', 'select']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, e, _global.HTMLCS.getTranslation('3_2_1_G107'), 'G107')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_2 = {
      register: function () {
        return ['form']
      },
      process: function (e, t) {
        'form' === e.nodeName.toLowerCase() && this.checkFormSubmitButton(e)
      },
      checkFormSubmitButton: function (t) {
        var n = !1
        if (0 < t.querySelectorAll('input[type=submit], input[type=image]').length) n = !0
        else {
          var e = t.querySelectorAll('button'),
            i = t.querySelectorAll('button[type=reset], button[type=button]')
          e.length > i.length && (n = !0)
        }
        if (!1 === n && t.id) {
          var a = document.querySelectorAll(
            'button[form], input[form][type=submit], input[form][type=image]'
          )
          Array.prototype.slice.call(a).forEach(function (e) {
            switch (e.getAttribute('type')) {
              case 'reset':
              case 'button':
                return
            }
            e.attributes.form.value === t.id && (n = !0)
          })
        }
        !1 === n &&
          HTMLCS.addMessage(HTMLCS.ERROR, t, _global.HTMLCS.getTranslation('3_2_2_H32.2'), 'H32.2')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_3 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('3_2_3_G61'), 'G61')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_4 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, t, _global.HTMLCS.getTranslation('3_2_4_G197'), 'G197')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_5 = {
      register: function () {
        return ['a']
      },
      process: function (e, t) {
        'a' === e.nodeName.toLowerCase() && this.checkNewWindowTarget(e)
      },
      checkNewWindowTarget: function (e) {
        !0 === e.hasAttribute('target') &&
          '_blank' === (e.getAttribute('target') || '') &&
          !1 === /new window/i.test(e.innerHTML) &&
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            e,
            _global.HTMLCS.getTranslation('3_2_5_H83.3'),
            'H83.3'
          )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_1 = {
      register: function () {
        return ['form']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('3_3_1_G83,G84,G85'),
          'G83,G84,G85'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_2 = {
      register: function () {
        return ['form']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('3_3_2_G131,G89,G184,H90'),
          'G131,G89,G184,H90'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_3 = {
      register: function () {
        return ['form']
      },
      process: function (e, t) {
        HTMLCS.addMessage(HTMLCS.NOTICE, e, _global.HTMLCS.getTranslation('3_3_3_G177'), 'G177')
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_4 = {
      register: function () {
        return ['form']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('3_3_4_G98,G99,G155,G164,G168.LegalForms'),
          'G98,G99,G155,G164,G168.LegalForms'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_5 = {
      register: function () {
        return ['form']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('3_3_5_G71,G184,G193'),
          'G71,G184,G193'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_6 = {
      register: function () {
        return ['form']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          e,
          _global.HTMLCS.getTranslation('3_3_6_G98,G99,G155,G164,G168.AllForms'),
          'G98,G99,G155,G164,G168.AllForms'
        )
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_1 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        if (e === t)
          for (var n = HTMLCS.util.getAllElements(t, '*[id]'), i = {}, a = 0; a < n.length; a++) {
            var o = n[a].getAttribute('id')
            !0 !== /^\s*$/.test(o) &&
              (void 0 !== i[o]
                ? HTMLCS.addMessage(
                    HTMLCS.ERROR,
                    n[a],
                    _global.HTMLCS.getTranslation('4_1_1_F77').replace(/\{\{id\}\}/g, o),
                    'F77'
                  )
                : (i[o] = !0))
          }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_2 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        if (e === t) {
          for (var n = this.processFormControls(t), i = 0; i < n.errors.length; i++)
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              n.errors[i].element,
              n.errors[i].msg,
              'H91.' + n.errors[i].subcode
            )
          for (i = 0; i < n.warnings.length; i++)
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              n.warnings[i].element,
              n.warnings[i].msg,
              'H91.' + n.warnings[i].subcode
            )
          this.addProcessLinksMessages(t)
        }
      },
      addProcessLinksMessages: function (e) {
        for (var t = this.processLinks(e), n = 0; n < t.empty.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.empty[n],
            _global.HTMLCS.getTranslation('4_1_2_H91.A.Empty'),
            'H91.A.Empty'
          )
        for (n = 0; n < t.emptyWithName.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.emptyWithName[n],
            _global.HTMLCS.getTranslation('4_1_2_H91.A.EmptyWithName'),
            'H91.A.EmptyWithName'
          )
        for (n = 0; n < t.emptyNoId.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.emptyNoId[n],
            _global.HTMLCS.getTranslation('4_1_2_H91.A.EmptyNoId'),
            'H91.A.EmptyNoId'
          )
        for (n = 0; n < t.noHref.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.noHref[n],
            _global.HTMLCS.getTranslation('4_1_2_H91.A.NoHref'),
            'H91.A.NoHref'
          )
        for (n = 0; n < t.placeholder.length; n++)
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            t.placeholder[n],
            _global.HTMLCS.getTranslation('4_1_2_H91.A.Placeholder'),
            'H91.A.Placeholder'
          )
        for (n = 0; n < t.noContent.length; n++)
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            t.noContent[n],
            _global.HTMLCS.getTranslation('4_1_2_H91.A.NoContent'),
            'H91.A.NoContent'
          )
      },
      processLinks: function (e) {
        for (
          var t = {
              empty: [],
              emptyWithName: [],
              emptyNoId: [],
              noHref: [],
              placeholder: [],
              noContent: [],
            },
            n = HTMLCS.util.getAllElements(e, 'a:not([role="button"])'),
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i],
            o = !1,
            r = !1,
            s = HTMLCS.util.getElementTextContent(a)
          !0 === a.hasAttribute('title') && !1 === /^\s*$/.test(a.getAttribute('title'))
            ? (o = !0)
            : !1 === /^\s*$/.test(s) && (o = !0),
            !0 === a.hasAttribute('href') &&
              !1 === /^\s*$/.test(a.getAttribute('href')) &&
              (r = !0),
            !1 === r
              ? !0 === /^\s*$/.test(s)
                ? !0 === a.hasAttribute('id')
                  ? t.empty.push(a)
                  : !0 === a.hasAttribute('name')
                    ? t.emptyWithName.push(a)
                    : t.emptyNoId.push(a)
                : !0 === a.hasAttribute('id') || !0 === a.hasAttribute('name')
                  ? t.noHref.push(a)
                  : t.placeholder.push(a)
              : !1 === o &&
                0 === a.querySelectorAll('img').length &&
                !1 === HTMLCS.util.hasValidAriaLabel(a) &&
                t.noContent.push(a)
        }
        return t
      },
      processFormControls: function (e) {
        for (
          var t = HTMLCS.util.getAllElements(
              e,
              'button, fieldset, input, select, textarea, [role="button"]'
            ),
            n = [],
            i = [],
            a = {
              button: ['@title', '_content', '@aria-label', '@aria-labelledby'],
              fieldset: ['legend', '@aria-label', '@aria-labelledby'],
              input_button: ['@value', '@aria-label', '@aria-labelledby'],
              input_text: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_file: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_password: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_checkbox: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_radio: ['label', '@title', '@aria-label', '@aria-labelledby'],
              input_image: ['@alt', '@title', '@aria-label', '@aria-labelledby'],
              select: ['label', '@title', '@aria-label', '@aria-labelledby'],
              textarea: ['label', '@title', '@aria-label', '@aria-labelledby'],
            },
            o = [
              'email',
              'search',
              'date',
              'datetime-local',
              'month',
              'number',
              'tel',
              'time',
              'url',
              'week',
              'range',
              'color',
            ],
            r = 0,
            s = o.length;
          r < s;
          r++
        )
          a['input_' + o[r]] = ['label', '@title', '@aria-label', '@aria-labelledby']
        for (var l = { select: 'option_selected' }, d = 0, u = t.length; d < u; d++) {
          var _ = t[d],
            c = _.nodeName.toLowerCase(),
            m = _.nodeName.substr(0, 1).toUpperCase() + _.nodeName.substr(1).toLowerCase()
          if ('input' === c) {
            !1 === _.hasAttribute('type')
              ? (c += '_text')
              : (c += '_' + _.getAttribute('type').toLowerCase()),
              ('input_submit' !== c && 'input_reset' !== c) || (c = 'input_button')
            m = 'Input' + c.substr(6, 1).toUpperCase() + c.substr(7).toLowerCase()
          }
          var g = a[c],
            p = l[c]
          if (
            (g || 'input_hidden' === c || (g = ['_content', '@aria-label', '@aria-labelledby']), g)
          ) {
            for (r = 0; r < g.length; r++) {
              var h = g[r]
              if ('_content' === h) {
                var b = HTMLCS.util.getElementTextContent(_)
                if (!1 === /^\s*$/.test(b)) break
              } else if ('label' === h) {
                if (
                  !1 !==
                  HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testLabelsOnInputs(_, e, !0)
                )
                  break
              } else if ('@' === h.charAt(0)) {
                if (
                  ('aria-label' === (h = h.substr(1, h.length)) || 'aria-labelledby' === h) &&
                  HTMLCS.util.hasValidAriaLabel(_)
                )
                  break
                if (!0 === _.hasAttribute(h) && !1 === /^\s*$/.test(_.getAttribute(h))) break
              } else {
                var f = _.querySelector(h)
                if (null !== f) {
                  b = HTMLCS.util.getElementTextContent(f)
                  if (!1 === /^\s*$/.test(b)) break
                }
              }
            }
            if (r === g.length) {
              var C = c + ' ' + _global.HTMLCS.getTranslation('4_1_2_element')
              'input_' === c.substr(0, 6) &&
                (C = c.substr(6) + _global.HTMLCS.getTranslation('4_1_2_input_element'))
              for (var v = g.slice(0, g.length), H = 0; H < v.length; H++)
                '_content' === v[H]
                  ? (v[H] = _global.HTMLCS.getTranslation('4_1_2_element_content'))
                  : '@' === v[H].charAt(0)
                    ? (v[H] =
                        v[H].substr(1) + ' ' + _global.HTMLCS.getTranslation('4_1_2_attribute'))
                    : (v[H] = v[H] + ' ' + _global.HTMLCS.getTranslation('4_1_2_element'))
              var T = _global.HTMLCS.getTranslation('4_1_2_msg_pattern')
                .replace(/\{\{msgNodeType\}\}/g, C)
                .replace(/\{\{builtAttrs\}\}/g, v.join(', '))
              _.hasAttribute('role') &&
                'button' === _.getAttribute('role') &&
                (T = _global.HTMLCS.getTranslation('4_1_2_msg_pattern_role_of_button').replace(
                  /\{\{builtAttrs\}\}/g,
                  v.join(', ')
                )),
                n.push({ element: _, msg: T, subcode: m + '.Name' })
            }
          }
          var y = !1
          if (void 0 === p) y = !0
          else if ('_content' === p) {
            b = HTMLCS.util.getElementTextContent(_)
            !1 === /^\s*$/.test(b) && (y = !0)
          } else if ('option_selected' === p) {
            if (!1 === _.hasAttribute('multiple'))
              null !== _.querySelector('option[selected]') && (y = !0)
            else y = !0
          } else
            '@' === p.charAt(0) &&
              ((p = p.substr(1, p.length)), !0 === _.hasAttribute(p) && (y = !0))
          if ((!1 === y && (valuFound = HTMLCS.util.hasValidAriaLabel(_)), !1 === y)) {
            C = c + ' ' + _global.HTMLCS.getTranslation('4_1_2_element')
            'input_' === c.substr(0, 6) &&
              (C = c.substr(6) + _global.HTMLCS.getTranslation('4_1_2_input_element'))
            T = _global.HTMLCS.getTranslation('4_1_2_msg_pattern2').replace(
              /\{\{msgNodeType\}\}/g,
              C
            )
            var k = '',
              w = !1
            '_content' === p
              ? (k = ' ' + _global.HTMLCS.getTranslation('4_1_2_msg_add_one'))
              : 'option_selected' === p
                ? ((w = !0),
                  (T = _global.HTMLCS.getTranslation('4_1_2_msg_pattern2').replace(
                    /\{\{msgNodeType\}\}/g,
                    C
                  )))
                : (k =
                    '@' === p.charAt(0)
                      ? ' ' +
                        _global.HTMLCS.getTranslation(
                          '4_1_2_value_exposed_using_attribute'
                        ).replace(/\{\{requiredValue\}\}/g, p)
                      : ' ' +
                        _global.HTMLCS.getTranslation('4_1_2_value_exposed_using_element').replace(
                          /\{\{requiredValue\}\}/g,
                          p
                        )),
              (T += k),
              !1 === w
                ? n.push({ element: _, msg: T, subcode: m + '.Value' })
                : i.push({ element: _, msg: T, subcode: m + '.Value' })
          }
        }
        return { errors: n, warnings: i }
      },
    }),
    (_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_3 = {
      register: function () {
        return ['_top']
      },
      process: function (e, t) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          t,
          _global.HTMLCS.getTranslation(
            '4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check'
          ),
          ''
        )
      },
    }),
    (_global.HTMLCS = new (function () {
      var _ = {},
        r = [],
        l = {},
        s = null,
        d = null,
        u = [],
        o = {}
      ;(this.ERROR = 1),
        (this.WARNING = 2),
        (this.NOTICE = 3),
        (this.lang = 'en'),
        (this.process = function (e, t, n, i, a) {
          if (((_ = {}), (r = []), (l = {}), (s = null), !t)) return !1
          var o = Object.keys(_global.translation)
          a && -1 !== o.indexOf(a) && (this.lang = a),
            _[v(e)]
              ? HTMLCS.run(n, t)
              : this.loadStandard(
                  e,
                  function () {
                    HTMLCS.run(n, t)
                  },
                  i
                )
        }),
        (this.getTranslation = function (t) {
          try {
            return _global.translation[this.lang][t]
          } catch (e) {
            throw new Error(
              'Translation for "' + t + '" does not exist in current language ' + this.lang
            )
          }
        }),
        (this.loadStandard = function (e, t, n) {
          if (!e) return !1
          g(
            e,
            function () {
              ;(s = e), t.call(this)
            },
            n
          )
        }),
        (this.run = function (n, i) {
          var a = null,
            e = !1
          if ('string' == typeof i) {
            e = !0
            var t = document.createElement('iframe')
            ;(t.style.display = 'none'),
              (t = document.body.insertBefore(t, null)).contentDocument
                ? (a = t.contentDocument)
                : a.contentWindow && (a = t.contentWindow.document),
              (t.load = function () {
                if (
                  ((this.onreadystatechange = null),
                  (this.onload = null),
                  !1 === HTMLCS.isFullDoc(i))
                ) {
                  var e = (a = a.getElementsByTagName('body')[0]).getElementsByTagName('div')[0]
                  e && '__HTMLCS-source-wrap' === e.id && ((e.id = ''), (a = e))
                }
                var t = HTMLCS.util.getAllElements(a)
                t.unshift(a), c(t, a, n)
              }),
              (t.onreadystatechange = function () {
                !0 === /^(complete|loaded)$/.test(this.readyState) &&
                  ((this.onreadystatechange = null), this.load())
              }),
              (t.onload = t.load),
              !1 === HTMLCS.isFullDoc(i) && -1 === i.indexOf('<body')
                ? a.write('<div id="__HTMLCS-source-wrap">' + i + '</div>')
                : a.write(i),
              a.close()
          } else a = i
          if (a) {
            ;(n = n || function () {}), (u = [])
            var o = HTMLCS.util.getAllElements(a)
            o.unshift(a), !1 === e && c(o, a, n)
          } else n.call(this)
        }),
        (this.isFullDoc = function (e) {
          var t = !1
          return (
            'string' == typeof e
              ? -1 !== e.toLowerCase().indexOf('<html')
                ? (t = !0)
                : -1 !== e.toLowerCase().indexOf('<head') &&
                  -1 !== e.toLowerCase().indexOf('<body') &&
                  (t = !0)
              : ('html' === e.nodeName.toLowerCase() || e.documentElement) && (t = !0),
            t
          )
        }),
        (this.addMessage = function (e, t, n, i, a) {
          ;(i = T(i)), u.push({ type: e, element: t, msg: o[i] || n, code: i, data: a })
        }),
        (this.getMessages = function () {
          return u.concat([])
        })
      var c = function (e, t, n) {
          for (var i = []; 0 < e.length; ) {
            var a = e.shift()
            if (a === t) var o = '_top'
            else o = a.tagName.toLowerCase()
            for (var r = 0; r < i.length; )
              a === i[r].element ? (u.push(i[r]), i.splice(r, 1)) : r++
            l[o] &&
              0 < l[o].length &&
              (m(a, l[o].concat([]), t), '_top' === o && ((i = u), (u = [])))
          }
          u = u.concat(i)
          var s = t.querySelectorAll('[role="presentation"]')
          ;(d = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1),
            [].forEach.call(s, function (e) {
              d.testSemanticPresentationRole(e)
            }),
            n instanceof Function == !0 && n.call(this)
        },
        m = function (e, t, n, i) {
          for (; 0 < t.length; ) {
            var a = t.shift()
            !0 === (d = a).useCallback
              ? a.process(e, n, function () {
                  m(e, t, n), (t = [])
                })
              : a.process(e, n)
          }
          i instanceof Function == !0 && i.call(this)
        },
        g = function (e, t, n, i) {
          0 !== e.indexOf('http') && (e = v(e))
          var a = e.split('/')
          _global['HTMLCS_' + a[a.length - 2]]
            ? p(e, t, n, i)
            : y(
                e,
                function () {
                  p(e, t, n, i)
                },
                n
              )
        },
        p = function (e, t, n, i) {
          var a = e.split('/'),
            o = _global['HTMLCS_' + a[a.length - 2]],
            r = {}
          for (var s in o) !0 === o.hasOwnProperty(s) && (r[s] = o[s])
          if (!r) return !1
          if (((_[e] = r), i))
            if (i.include && 0 < i.include.length) r.sniffs = i.include
            else if (i.exclude)
              for (var l = 0; l < i.exclude.length; l++) {
                var d = r.sniffs.find(i.exclude[l])
                0 <= d && r.sniffs.splice(d, 1)
              }
          var u = r.sniffs.slice(0, r.sniffs.length)
          h(e, u, t, n)
        },
        h = function (e, t, n, i) {
          if (0 !== t.length) {
            var a = t.shift()
            b(
              e,
              a,
              function () {
                h(e, t, n, i)
              },
              i
            )
          } else n.call(this)
        },
        b = function (e, t, n, i) {
          if ('string' == typeof t) {
            var a = function () {
              f(e, t), n.call(this)
            }
            H(e, t) ? a() : y(C(e, t), a, i)
          } else
            g(
              t.standard,
              function () {
                if (t.messages) for (var e in t.messages) o[e] = t.messages[e]
                n.call(this)
              },
              i,
              { exclude: t.exclude, include: t.include }
            )
        },
        f = function (e, t) {
          var n = H(e, t)
          if (!n) return !1
          if (n.register)
            for (var i = n.register(), a = 0; a < i.length; a++)
              l[i[a]] || (l[i[a]] = []), l[i[a]].push(n)
          r.push(n)
        },
        C = function (e, t) {
          var n = e.split('/')
          return n.pop(), n.join('/') + '/Sniffs/' + t.replace(/\./g, '/') + '.js'
        },
        v = function (e) {
          for (var t = document.getElementsByTagName('script'), n = null, i = 0; i < t.length; i++)
            if (t[i].src && t[i].src.match(/HTMLCS\.js/)) {
              n = (n = t[i].src.replace(/HTMLCS\.js/, '')).substring(0, n.indexOf('?'))
              break
            }
          return n + 'Standards/' + e + '/ruleset.js'
        },
        H = function (e, t) {
          var n = 'HTMLCS_'
          return (
            (n += _[e].name + '_Sniffs_'),
            (n += t.split('.').join('_')),
            _global[n] ? ((_global[n]._name = t), _global[n]) : null
          )
        },
        T = function (e) {
          return (e = s + '.' + d._name + '.' + e)
        },
        y = function (e, t, n) {
          var i = document.createElement('script')
          ;(i.onload = function () {
            ;(i.onload = null), (i.onreadystatechange = null), t.call(this)
          }),
            (i.onerror = function () {
              ;(i.onload = null), (i.onreadystatechange = null), n && n.call(this)
            }),
            (i.onreadystatechange = function () {
              !0 === /^(complete|loaded)$/.test(this.readyState) &&
                ((i.onreadystatechange = null), i.onload())
            }),
            (i.src = e),
            document.head
              ? document.head.appendChild(i)
              : document.getElementsByTagName('head')[0].appendChild(i)
        }
    })()),
    (_global.HTMLCS.util = (function () {
      var v = {
        trim: function (e) {
          return e.replace(/^\s*(.*)\s*$/g, '$1')
        },
        isStringEmpty: function (e) {
          if ('string' != typeof e) return !0
          var t = !0
          return (
            -1 !== e.indexOf(String.fromCharCode(160))
              ? (t = !1)
              : !1 === /^\s*$/.test(e) && (t = !1),
            t
          )
        },
        getDocumentType: function (e) {
          var t = null,
            n = e.doctype
          if (n) {
            var i = n.name,
              a = n.publicId,
              o = n.systemId
            if (
              (null === i && (i = ''),
              null === o && (o = ''),
              null === a && (a = ''),
              'html' === i.toLowerCase())
            )
              if (
                ('' === a && '' === o
                  ? (t = 'html5')
                  : -1 !== a.indexOf('//DTD HTML 4.01') ||
                      -1 !== o.indexOf('w3.org/TR/html4/strict.dtd')
                    ? (t = 'html401')
                    : -1 !== a.indexOf('//DTD HTML 4.0') ||
                        -1 !== o.indexOf('w3.org/TR/REC-html40/strict.dtd')
                      ? (t = 'html40')
                      : -1 !== a.indexOf('//DTD XHTML 1.0 Strict') &&
                          -1 !== o.indexOf('w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd')
                        ? (t = 'xhtml10')
                        : -1 !== a.indexOf('//DTD XHTML 1.1') &&
                          -1 !== o.indexOf('w3.org/TR/xhtml11/DTD/xhtml11.dtd') &&
                          (t = 'xhtml11'),
                -1 !== o.indexOf('about:legacy-compat'))
              )
                if ('application/xhtml+xml' === e.contentType)
                  'http://www.w3.org/1999/xhtml' ===
                    e.querySelector('html').getAttribute('xmlns') && (t = 'xhtml5')
          } else {
            if ('application/xhtml+xml' === e.contentType)
              'http://www.w3.org/1999/xhtml' === e.querySelector('html').getAttribute('xmlns') &&
                (t = 'xhtml5')
          }
          return t
        },
        getElementWindow: function (e) {
          if (e.ownerDocument) var t = e.ownerDocument
          else t = e
          return t.defaultView ? t.defaultView : t.parentWindow
        },
        hasValidAriaLabel: function (e) {
          var i = !1
          if (!0 === e.hasAttribute('aria-labelledby'))
            e.getAttribute('aria-labelledby')
              .split(/\s+/)
              .forEach(function (e) {
                var t = document.getElementById(e)
                if (t) {
                  var n = v.getElementTextContent(t)
                  !1 === /^\s*$/.test(n) && (i = !0)
                }
              })
          else if (!0 === e.hasAttribute('aria-label')) {
            var t = e.getAttribute('aria-label')
            !1 === /^\s*$/.test(t) && (i = !0)
          }
          return i
        },
        style: function (e, t) {
          var n = null,
            i = v.getElementWindow(e)
          t = t || null
          return (
            e.currentStyle
              ? (n = e.currentStyle)
              : i.getComputedStyle && (n = i.getComputedStyle(e, t)),
            n
          )
        },
        isVisuallyHidden: function (e) {
          var t = !1
          if ('title' === e.nodeName.toLowerCase() && null !== v.findParentNode(e, 'svg')) return !0
          var n = v.style(e)
          return (
            null !== n &&
              (('hidden' !== n.visibility && 'none' !== n.display) || (t = !0),
              parseInt(n.left, 10) + parseInt(n.width, 10) < 0 && (t = !0),
              parseInt(n.top, 10) + parseInt(n.height, 10) < 0 && (t = !0)),
            t
          )
        },
        isAriaHidden: function (e) {
          do {
            if (e.hasAttribute('aria-hidden') && 'true' === e.getAttribute('aria-hidden')) return !0
          } while ((e = e.parentElement))
          return !1
        },
        isAccessibilityHidden: function (e) {
          do {
            if (e.hasAttribute('role') && 'presentation' === e.getAttribute('role')) return !0
            if (e.hasAttribute('aria-hidden') && 'true' === e.getAttribute('aria-hidden')) return !0
          } while ((e = e.parentElement))
          return !1
        },
        isFocusable: function (e) {
          var t = e.nodeName.toLowerCase()
          return (
            !0 !== v.isDisabled(e) &&
            !0 !== v.isVisuallyHidden(e) &&
            (!!/^(input|select|textarea|button|object)$/.test(t) ||
              !(
                'a' !== t ||
                !e.hasAttribute('href') ||
                !1 !== /^\s*$/.test(e.getAttribute('href'))
              ))
          )
        },
        isKeyboardTabbable: function (e) {
          return !0 !== e.hasAttribute('tabindex')
            ? v.isFocusable(e)
            : '-1' !== e.getAttribute('tabindex')
        },
        isKeyboardNavigable: function (e) {
          return (
            !(!e.hasAttribute('accesskey') || !1 !== /^\s*$/.test(e.getAttribute('accesskey'))) ||
            v.isKeyboardTabbable(e)
          )
        },
        isDisabled: function (e) {
          var t = !1
          return (!0 !== e.disabled && 'true' !== e.getAttribute('aria-disabled')) || (t = !0), t
        },
        isInDocument: function (e) {
          for (var t = e.parentNode; t && t.ownerDocument; ) t = t.parentNode
          return null !== t
        },
        getAllElements: function (e, t) {
          ;(e = e || document), (t = t || '*')
          var n = Array.prototype.slice.call(e.querySelectorAll(t)).filter(function (e) {
              return !1 === HTMLCS.util.isAccessibilityHidden(e)
            }),
            i = document.getElementById('HTMLCS-wrapper')
          return (
            i &&
              (n = n.filter(function (e) {
                return !1 === i.contains(e)
              })),
            n
          )
        },
        contains: function (e, t) {
          var n = !1
          return (
            e !== t &&
              (e.ownerDocument
                ? e.contains && !0 === e.contains(t)
                  ? (n = !0)
                  : e.compareDocumentPosition && 0 < (16 & e.compareDocumentPosition(t)) && (n = !0)
                : t.ownerDocument && t.ownerDocument === e && (n = !0)),
            n
          )
        },
        isLayoutTable: function (e) {
          return null === e.querySelector('th')
        },
        contrastRatio: function (e, t) {
          var n = (0.05 + v.relativeLum(e)) / (0.05 + v.relativeLum(t))
          return n < 1 && (n = 1 / n), n
        },
        relativeLum: function (e) {
          if (e.charAt) e = v.colourStrToRGB(e)
          var t = {}
          for (var n in e)
            e[n] <= 0.03928 ? (t[n] = e[n] / 12.92) : (t[n] = Math.pow((e[n] + 0.055) / 1.055, 2.4))
          return 0.2126 * t.red + 0.7152 * t.green + 0.0722 * t.blue
        },
        colourStrToRGB: function (e) {
          if ('rgb' === (e = e.toLowerCase()).substring(0, 3)) {
            var t = /^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)([^)]*)\)$/.exec(e)
            ;(e = { red: t[1] / 255, green: t[2] / 255, blue: t[3] / 255, alpha: 1 }),
              t[4] && (e.alpha = parseFloat(/^,\s*(.*)$/.exec(t[4])[1]))
          } else {
            '#' === e.charAt(0) && (e = e.substr(1)),
              3 === e.length && (e = e.replace(/^(.)(.)(.)$/, '$1$1$2$2$3$3')),
              4 === e.length && (e = e.replace(/^(.)(.)(.)(.)$/, '$1$1$2$2$3$3$4$4'))
            var n = 1
            8 === e.length && (n = parseInt(e.substr(6, 2), 16) / 255),
              (e = {
                red: parseInt(e.substr(0, 2), 16) / 255,
                green: parseInt(e.substr(2, 2), 16) / 255,
                blue: parseInt(e.substr(4, 2), 16) / 255,
                alpha: n,
              })
          }
          return e
        },
        RGBtoColourStr: function (e) {
          return (
            (colourStr = '#'),
            (e.red = Math.round(255 * e.red)),
            (e.green = Math.round(255 * e.green)),
            (e.blue = Math.round(255 * e.blue)),
            e.red % 17 == 0 && e.green % 17 == 0 && e.blue % 17 == 0
              ? ((colourStr += (e.red / 17).toString(16)),
                (colourStr += (e.green / 17).toString(16)),
                (colourStr += (e.blue / 17).toString(16)))
              : (e.red < 16 && (colourStr += '0'),
                (colourStr += e.red.toString(16)),
                e.green < 16 && (colourStr += '0'),
                (colourStr += e.green.toString(16)),
                e.blue < 16 && (colourStr += '0'),
                (colourStr += e.blue.toString(16))),
            colourStr
          )
        },
        sRGBtoHSV: function (e) {
          e.charAt && (e = v.colourStrToRGB(e))
          var t = { hue: 0, saturation: 0, value: 0 },
            n = Math.max(e.red, e.green, e.blue),
            i = n - Math.min(e.red, e.green, e.blue)
          return (
            0 === i
              ? (t.value = e.red)
              : ((t.value = n) === e.red
                  ? (t.hue = (e.green - e.blue) / i)
                  : n === e.green
                    ? (t.hue = 2 + (e.blue - e.red) / i)
                    : (t.hue = 4 + (e.red - e.green) / i),
                (t.hue = 60 * t.hue),
                360 <= t.hue && (t.hue -= 360),
                (t.saturation = i / t.value)),
            t
          )
        },
        HSVtosRGB: function (e) {
          var t = { red: 0, green: 0, blue: 0 }
          if (0 === e.saturation) (t.red = e.value), (t.green = e.value), (t.blue = e.value)
          else {
            var n = e.value * e.saturation,
              i = e.value - n,
              a = e.hue / 60,
              o = a - 2 * Math.floor(a / 2),
              r = n * (1 - Math.abs(o - 1))
            switch (Math.floor(a)) {
              case 0:
                ;(t.red = n), (t.green = r)
                break
              case 1:
                ;(t.green = n), (t.red = r)
                break
              case 2:
                ;(t.green = n), (t.blue = r)
                break
              case 3:
                ;(t.blue = n), (t.green = r)
                break
              case 4:
                ;(t.blue = n), (t.red = r)
                break
              case 5:
                ;(t.red = n), (t.blue = r)
            }
            ;(t.red = t.red + i), (t.green = t.green + i), (t.blue = t.blue + i)
          }
          return t
        },
        getElementTextContent: function (e, t) {
          void 0 === t && (t = !0)
          e = e.cloneNode(!0)
          for (var n = [], i = 0; i < e.childNodes.length; i++) n.push(e.childNodes[i])
          for (var a = [e.textContent]; 0 < n.length; ) {
            var o = n.shift()
            if (1 === o.nodeType)
              if ('img' === o.nodeName.toLowerCase())
                !0 === t && !0 === o.hasAttribute('alt') && a.push(o.getAttribute('alt'))
              else for (i = 0; i < o.childNodes.length; i++) n.push(o.childNodes[i])
            else 3 === o.nodeType && a.push(o.nodeValue)
          }
          return (a = a.join('').replace(/^\s+|\s+$/g, ''))
        },
        findParentNode: function (e, t) {
          if (e && e.matches && e.matches(t)) return e
          for (; e && e.parentNode; ) if ((e = e.parentNode) && e.matches && e.matches(t)) return e
          return null
        },
        eachParentNode: function (e, t) {
          for (; e && e.parentNode; ) t(e), (e = e.parentNode)
        },
        isPhrasingNode: function (e) {
          return (
            -1 !==
            [
              'abbr',
              'audio',
              'b',
              'bdo',
              'br',
              'button',
              'canvas',
              'cite',
              'code',
              'command',
              'data',
              'datalist',
              'dfn',
              'em',
              'embed',
              'i',
              'iframe',
              'img',
              'input',
              'kbd',
              'keygen',
              'label',
              'mark',
              'math',
              'meter',
              'noscript',
              'object',
              'output',
              'progress',
              'q',
              'ruby',
              'samp',
              'script',
              'select',
              'small',
              'span',
              'strong',
              'sub',
              'sup',
              'svg',
              'textarea',
              'time',
              'var',
              'video',
              'wbr',
            ].indexOf(e.toLowerCase())
          )
        },
        getChildrenForTable: function (e, t) {
          if ('table' !== e.nodeName.toLowerCase()) return null
          for (var n = [], i = e.getElementsByTagName(t), a = 0, o = i.length; a < o; a++)
            v.findParentNode(i[a], 'table') === e && n.push(i[a])
          return n
        },
        testTableHeaders: function (e) {
          for (
            var t = {
                required: !0,
                used: !1,
                correct: !0,
                allowScope: !0,
                missingThId: [],
                missingTd: [],
                wrongHeaders: [],
              },
              n = v.getChildrenForTable(e, 'tr'),
              i = [],
              a = { rows: [], cols: [] },
              o = { rows: 0, cols: 0 },
              r = 0;
            r < n.length;
            r++
          )
            for (var s = n[r], l = 0, d = 0; d < s.childNodes.length; d++) {
              if (1 === (h = s.childNodes[d]).nodeType) {
                if (i[r]) for (; i[r][0] === l; ) i[r].shift(), l++
                var u = h.nodeName.toLowerCase(),
                  _ = Number(h.getAttribute('rowspan')) || 1,
                  c = Number(h.getAttribute('colspan')) || 1
                if (1 < _)
                  for (var m = r + 1; m < r + _; m++) {
                    i[m] || (i[m] = [])
                    for (var g = l; g < l + c; g++) i[m].push(g)
                  }
                if ('th' === u)
                  '' === (h.getAttribute('id') || '') && ((t.correct = !1), t.missingThId.push(h)),
                    1 < _ && 1 < c
                      ? (t.allowScope = !1)
                      : !0 === t.allowScope &&
                        (void 0 === a.cols[l] && (a.cols[l] = 0),
                        void 0 === a.rows[r] && (a.rows[r] = 0),
                        (a.rows[r] += c),
                        (a.cols[l] += _))
                else
                  'td' === u &&
                    !0 === h.hasAttribute('headers') &&
                    !1 === /^\s*$/.test(h.getAttribute('headers')) &&
                    (t.used = !0)
                l += c
              }
            }
          for (m = 0; m < a.rows.length; m++) 1 < a.rows[m] && o.rows++
          for (m = 0; m < a.cols.length; m++) 1 < a.cols[m] && o.cols++
          1 < o.rows || 1 < o.cols
            ? (t.allowScope = !1)
            : !0 !== t.allowScope || (0 !== o.rows && 0 !== o.cols) || (t.required = !1)
          var p = HTMLCS.util.getCellHeaders(e)
          for (m = 0; m < p.length; m++) {
            var h = p[m].cell,
              b = p[m].headers
            if (!1 === h.hasAttribute('headers')) (t.correct = !1), t.missingTd.push(h)
            else {
              var f = (h.getAttribute('headers') || '').split(/\s+/)
              if (0 === f.length) (t.correct = !1), t.missingTd.push(h)
              else if (
                b !==
                (f = (f = ' ' + f.sort().join(' ') + ' ')
                  .replace(/\s+/g, ' ')
                  .replace(/(\w+\s)\1+/g, '$1')
                  .replace(/^\s*(.*?)\s*$/g, '$1'))
              ) {
                t.correct = !1
                var C = { element: h, expected: b, actual: h.getAttribute('headers') || '' }
                t.wrongHeaders.push(C)
              }
            }
          }
          return t
        },
        getCellHeaders: function (e) {
          if ('object' != typeof e) return null
          if ('table' !== e.nodeName.toLowerCase()) return null
          for (
            var t = v.getChildrenForTable(e, 'tr'),
              n = [],
              i = { rows: {}, cols: {} },
              a = [],
              o = ['th', 'td'],
              r = 0;
            r < o.length;
            r++
          )
            for (var s = o[r], l = 0; l < t.length; l++)
              for (var d = t[l], u = 0, _ = 0; _ < d.childNodes.length; _++) {
                var c = d.childNodes[_]
                if (1 === c.nodeType) {
                  if (n[l]) for (; n[l][u]; ) u++
                  var m = c.nodeName.toLowerCase(),
                    g = Number(c.getAttribute('rowspan')) || 1,
                    p = Number(c.getAttribute('colspan')) || 1
                  if (1 < g)
                    for (var h = l + 1; h < l + g; h++) {
                      n[h] || (n[h] = [])
                      for (var b = u; b < u + p; b++) n[h][b] = !0
                    }
                  if (m === s)
                    if ('th' === m) {
                      var f = c.getAttribute('id') || ''
                      for (h = l; h < l + g; h++)
                        (i.rows[h] = i.rows[h] || { first: u, ids: [] }), i.rows[h].ids.push(f)
                      for (h = u; h < u + p; h++)
                        (i.cols[h] = i.cols[h] || { first: l, ids: [] }), i.cols[h].ids.push(f)
                    } else if ('td' === m) {
                      var C = []
                      for (h = l; h < l + g; h++)
                        for (b = u; b < u + p; b++)
                          i.rows[h] && b >= i.rows[h].first && (C = C.concat(i.rows[h].ids)),
                            i.cols[b] && h >= i.cols[b].first && (C = C.concat(i.cols[b].ids))
                      if (0 < C.length)
                        (C = (C =
                          ' ' +
                          C.sort()
                            .filter(function (e, t, n) {
                              return n.indexOf(e) === t
                            })
                            .join(' ') +
                          ' ')
                          .replace(/\s+/g, ' ')
                          .replace(/(\w+\s)\1+/g, '$1')
                          .replace(/^\s*(.*?)\s*$/g, '$1')),
                          a.push({ cell: c, headers: C })
                    }
                  u += p
                }
              }
          return a
        },
        getPreviousSiblingElement: function (e, t, n) {
          void 0 === t && (t = null), void 0 === n && (n = !1)
          for (var i = e.previousSibling; null !== i; ) {
            if (3 === i.nodeType) {
              if (!1 === HTMLCS.util.isStringEmpty(i.nodeValue) && !0 === n) {
                i = null
                break
              }
            } else if (1 === i.nodeType) {
              if (null === t || i.nodeName.toLowerCase() === t) break
              if (!0 !== n) break
              i = null
              break
            }
            i = i.previousSibling
          }
          return i
        },
        getNextSiblingElement: function (e, t, n) {
          void 0 === t && (t = null), void 0 === n && (n = !1)
          for (var i = e.nextSibling; null !== i; ) {
            if (3 === i.nodeType) {
              if (!1 === HTMLCS.util.isStringEmpty(i.nodeValue) && !0 === n) {
                i = null
                break
              }
            } else if (1 === i.nodeType) {
              if (null === t || i.nodeName.toLowerCase() === t) break
              if (!0 !== n) break
              i = null
              break
            }
            i = i.nextSibling
          }
          return i
        },
        getTextContent: function (e) {
          return void 0 !== e.textContent ? e.textContent : e.innerText
        },
        getAccessibleName: function (e, t) {
          if (v.isVisuallyHidden(e)) return ''
          if (e.getAttribute('aria-labelledby')) {
            for (
              var n = [], i = e.getAttribute('aria-labelledby').split(' '), a = 0;
              a < i.length;
              a++
            ) {
              var o = i[a],
                r = t.getElementById(o)
              r && n.push(r.textContent)
            }
            return n.join(' ')
          }
          return e.getAttribute('aria-label')
            ? e.getAttribute('aria-label')
            : e.getAttribute('title') &&
                'presentation' !== e.getAttribute('role') &&
                'none' !== e.getAttribute('role')
              ? e.getAttribute('aria-label')
              : ''
        },
      }
      return v
    })())
  var HTMLCS_RUNNER = (_global.HTMLCS_RUNNER = new (function () {
    ;(this.run = function (e, t) {
      var a = this
      HTMLCS.process(
        e,
        document,
        function () {
          var e = HTMLCS.getMessages(),
            t = e.length,
            n = {}
          ;(n[HTMLCS.ERROR] = 0), (n[HTMLCS.WARNING] = 0)
          for (var i = (n[HTMLCS.NOTICE] = 0); i < t; i++) a.output(e[i]), n[e[i].type]++
          console.log('done')
        },
        function () {
          console.log('Something in HTML_CodeSniffer failed to parse. Cannot run.'),
            console.log('done')
        },
        'en'
      )
    }),
      (this.output = function (e) {
        var t = 'UNKNOWN'
        switch (e.type) {
          case HTMLCS.ERROR:
            t = _global.HTMLCS.getTranslation('auditor_error')
            break
          case HTMLCS.WARNING:
            t = _global.HTMLCS.getTranslation('auditor_warning')
            break
          case HTMLCS.NOTICE:
            t = _global.HTMLCS.getTranslation('auditor_notice')
        }
        var n = ''
        e.element && (n = e.element.nodeName.toLowerCase())
        var i = ''
        e.element.id && '' !== e.element.id && (i = '#' + e.element.id)
        var a = ''
        if (e.element.outerHTML) {
          var o = e.element.cloneNode(!0)
          ;(o.innerHTML = '...'), (a = o.outerHTML)
        }
        console.log('[HTMLCS] ' + t + '|' + e.code + '|' + n + '|' + i + '|' + e.msg + '|' + a)
      })
  })())
  _global.HTMLCSAuditor = new (function () {
    var M = 'HTMLCS-',
      c = '',
      L = '',
      H = [],
      A = {},
      z = null,
      N = null,
      T = [],
      b = 1,
      r = null,
      x = this
    this.pointerContainer = null
    var I = function (e, t, n, i) {
        var a = z.createElement('div')
        ;(a.id = e), (a.className = M + 'button'), a.setAttribute('title', n)
        var o = z.createElement('span')
        ;(o.className = M + 'button-icon ' + M + 'button-' + t), a.appendChild(o)
        var r = z.createTextNode(String.fromCharCode(160))
        return (
          a.appendChild(r),
          i instanceof Function == !0 &&
            (a.onclick = function () {
              !1 === /disabled/.test(a.className) && i(a)
            }),
          a
        )
      },
      y = function (e, t, n, i, a) {
        void 0 === n && (n = !1)
        var o = z.createElement('label'),
          r = ''
        ;(o.className = M + 'checkbox'),
          (r += '<span class="' + M + 'checkbox-switch">'),
          (r += '<span class="' + M + 'checkbox-slider"></span>'),
          (r += '<input id="' + e + '" type="checkbox"'),
          !0 === n && ((r += ' checked="checked"'), (o.className += ' active')),
          !0 === i && ((r += ' disabled="disabled"'), (o.className += ' disabled')),
          (r += ' title="' + t + '" /></span>'),
          (o.innerHTML = r)
        var s = o.getElementsByTagName('input')[0]
        return (
          (o.onclick = function (e) {
            return (
              !1 === i &&
                ((s.checked = !s.checked),
                !0 === s.checked
                  ? (o.className += ' active')
                  : (o.className = o.className.replace('active', '')),
                a instanceof Function == !0 && a(s)),
              !1
            )
          }),
          o
        )
      },
      f = function (e, i) {
        var t = z.createElement('div')
        ;(t.className = M + 'header'),
          (t.innerHTML = 'HTML_CodeSniffer by Squiz'),
          t.setAttribute('title', _global.HTMLCS.getTranslation('auditor_using_standard') + e)
        var a = !1,
          o = 0,
          r = 0
        ;(t.onmousedown = function (e) {
          return (e = e || window.event), (a = !0), (o = e.clientX), (r = e.clientY), !1
        }),
          (z.onmousemove = function (e) {
            if (((e = e || window.event), !0 === a)) {
              var t = i.offsetTop,
                n = i.offsetLeft
              r < e.clientY
                ? ((t += e.clientY - r), (i.style.top = t + 'px'))
                : r > e.clientY && ((t -= r - e.clientY), (i.style.top = t + 'px')),
                o < e.clientX
                  ? ((n += e.clientX - o), (i.style.left = n + 'px'))
                  : o > e.clientX && ((n -= o - e.clientX), (i.style.left = n + 'px')),
                (o = e.clientX),
                (r = e.clientY)
            }
          }),
          (z.onmouseup = function (e) {
            var t = window.innerHeight - i.offsetHeight
            t < r ? (i.style.top = t + 'px') : r < 0 && (i.style.top = '0px'), (a = !1)
          })
        var n = z.createElement('div')
        return (
          (n.className = M + 'close'),
          n.setAttribute('title', _global.HTMLCS.getTranslation('auditor_close')),
          (n.onmousedown = function () {
            x.close.call(x)
          }),
          t.appendChild(n),
          t
        )
      },
      C = function (a, o) {
        var r = z.createElement('div')
        r.className = M + 'summary-detail'
        var e = z.createElement('div')
        e.className = M + 'summary-left'
        var t = z.createElement('div')
        t.className = M + 'summary-right'
        var n = z.createElement('ol')
        n.className = M + 'lineage'
        var i = z.createElement('li')
        i.className = M + 'lineage-item'
        var s = z.createElement('a')
        ;(s.className = M + 'lineage-link'), (s.href = 'javascript:')
        var l = z.createElement('span')
        ;(l.innerHTML = _global.HTMLCS.getTranslation('auditor_home')),
          s.appendChild(l),
          (s.onmousedown = function () {
            x.run(L, H, A)
          })
        var d = z.createElement('li')
        d.className = M + 'lineage-item'
        var u = z.createElement('a')
        ;(u.className = M + 'lineage-link'),
          (u.href = 'javascript:'),
          (u.innerHTML = _global.HTMLCS.getTranslation('auditor_report')),
          u.setAttribute('title', _global.HTMLCS.getTranslation('auditor_back_to_report')),
          (u.onmousedown = function () {
            var e = z.querySelectorAll('.HTMLCS-inner-wrapper')[0]
            ;(e.style.marginLeft = '0px'),
              (e.style.maxHeight = null),
              (r.style.display = 'none'),
              (z.querySelectorAll('.HTMLCS-summary')[0].style.display = 'block')
          })
        var _ = z.createElement('li')
        ;(_.className = M + 'lineage-item'),
          (_.innerHTML =
            _global.HTMLCS.getTranslation('auditor_issue') +
            ' ' +
            a +
            ' ' +
            _global.HTMLCS.getTranslation('auditor_of') +
            ' ' +
            o),
          i.appendChild(s),
          d.appendChild(u),
          n.appendChild(i),
          n.appendChild(d),
          n.appendChild(_),
          e.appendChild(n)
        var c = z.createElement('div')
        c.className = M + 'button-group'
        var m = I(
            M + 'button-previous-issue',
            'previous',
            _global.HTMLCS.getTranslation('auditor_previous_issue'),
            function (e) {
              var t = Number(a) - 1
              if (1 <= t) {
                p(t - 1), (wrapper = r.parentNode)
                var n = C(t, o)
                wrapper.replaceChild(n, r), (n.style.display = 'block')
                var i = z.querySelectorAll('.HTMLCS-issue-detail-list')[0]
                ;(i.firstChild.style.marginLeft =
                  parseInt(i.firstChild.style.marginLeft, 10) + 300 + 'px'),
                  h(t - 1)
              }
            }
          ),
          g = I(
            M + 'button-next-issue',
            'next',
            _global.HTMLCS.getTranslation('auditor_next_issue'),
            function (e) {
              var t = Number(a) + 1
              if (t <= T.length) {
                p(t - 1), (wrapper = r.parentNode)
                var n = C(t, o)
                wrapper.replaceChild(n, r), (n.style.display = 'block')
                var i = z.querySelectorAll('.HTMLCS-issue-detail-list')[0]
                ;(i.firstChild.style.marginLeft =
                  parseInt(i.firstChild.style.marginLeft, 10) - 300 + 'px'),
                  h(t - 1)
              }
            }
          )
        return (
          1 === a && (m.className += ' disabled'),
          a === o && (g.className += ' disabled'),
          c.appendChild(m),
          c.appendChild(g),
          t.appendChild(c),
          r.appendChild(e),
          r.appendChild(t),
          r
        )
      },
      v = function (e, t) {
        var n = '',
          i = ''
        switch (t.type) {
          case HTMLCS.ERROR:
            i = 'Error'
            break
          case HTMLCS.WARNING:
            i = 'Warning'
            break
          case HTMLCS.NOTICE:
            i = 'Notice'
        }
        var a = i.toLowerCase(),
          o = t.msg
        115 < o.length && (o = o.substr(0, 115) + '...'),
          ((n = z.createElement('li')).id = M + 'msg-' + e)
        var r = z.createElement('span')
        ;(r.className = M + 'issue-type ' + M + a), r.setAttribute('title', i), n.appendChild(r)
        var s = z.createElement('span')
        return (
          (s.className = M + 'issue-title'),
          (s.innerHTML = o),
          n.appendChild(s),
          (n.onclick = function () {
            var e = this.id.replace(new RegExp(M + 'msg-'), '')
            p(e)
            var t = z.querySelectorAll('.HTMLCS-issue-detail-list')[0]
            ;(t.className += ' ' + M + 'transition-disabled'),
              (t.firstChild.style.marginLeft = -300 * e + 'px'),
              h(e),
              setTimeout(function () {
                t.className = t.className.replace(new RegExp(' ' + M + 'transition-disabled'), '')
              }, 500)
            var n = z.querySelectorAll('.HTMLCS-inner-wrapper')[0]
            ;(n.style.marginLeft = '-300px'),
              (n.style.maxHeight = '15em'),
              (summary = z.querySelectorAll('.HTMLCS-summary-detail')[0])
            var i = C(parseInt(e) + 1, T.length)
            summary.parentNode.replaceChild(i, summary),
              (i.style.display = 'block'),
              (z.querySelectorAll('.HTMLCS-summary')[0].style.display = 'none')
          }),
          n
        )
      },
      p = function (e) {
        for (
          var t = z.querySelectorAll('.HTMLCS-issue-detail-list')[0].getElementsByTagName('li'),
            n = 0;
          n < t.length;
          n++
        )
          t[n].className = t[n].className.replace(new RegExp(' ' + M + 'current'), '')
        ;(z.getElementById('HTMLCS-msg-detail-' + e).className += ' ' + M + 'current'),
          A.showIssueCallback && A.showIssueCallback.call(this, e)
      },
      k = function (e, t, n) {
        void 0 === n && (n = L)
        var i = ''
        switch (t.type) {
          case HTMLCS.ERROR:
            i = 'Error'
            break
          case HTMLCS.WARNING:
            i = 'Warning'
            break
          case HTMLCS.NOTICE:
            i = 'Notice'
        }
        var a = M + i.toLowerCase(),
          o = HTMLCS.util.getElementWindow(z)['HTMLCS_' + n],
          r = []
        ;(o = N['HTMLCS_' + n]).getMsgInfo && (r = o.getMsgInfo(t.code))
        var s = z.createElement('li')
        s.id = M + 'msg-detail-' + e
        var l = z.createElement('div')
        l.className = M + 'issue-details'
        var d = z.createElement('span')
        ;(d.className = M + 'issue-type ' + a), d.setAttribute('title', i)
        var u = z.createElement('div')
        ;(u.className = M + 'issue-title'), (u.innerHTML = t.msg)
        var _ = z.createElement('div')
        _.className = M + 'issue-wcag-ref'
        for (var c = '', m = 0; m < r.length; m++)
          c += '<em>' + r[m][0] + ':</em> ' + r[m][1] + '<br/>'
        if (
          ((_.innerHTML = c),
          l.appendChild(d),
          l.appendChild(u),
          l.appendChild(_),
          s.appendChild(l),
          !1 === E.isPointable(t.element))
        ) {
          ;((h = z.createElement('div')).className = M + 'issue-source'),
            s.appendChild(h),
            ((G = z.createElement('div')).className = M + 'issue-source-inner-u2p')
          var g = _global.HTMLCS.getTranslation('auditor_unable_to_point')
          if ('#document' === t.element.nodeName)
            g = _global.HTMLCS.getTranslation('auditor_applies_entire_document')
          else if (null === t.element.ownerDocument)
            g = _global.HTMLCS.getTranslation('auditor_unable_to_point_removed')
          else {
            var p = t.element.ownerDocument.getElementsByTagName('body')[0]
            !1 === HTMLCS.util.isInDocument(t.element)
              ? (g += _global.HTMLCS.getTranslation('auditor_unable_to_point_entire'))
              : !1 === HTMLCS.util.contains(p, t.element)
                ? (g = _global.HTMLCS.getTranslation('auditor_unable_to_point_outside'))
                : (g += ' ' + _global.HTMLCS.getTranslation('auditor_unable_to_point_outside'))
          }
          void 0 !== G.textContent ? (G.textContent = g) : (G.innerText = g), h.appendChild(G)
        }
        if (A.customIssueSource) {
          ;((h = z.createElement('div')).className = M + 'issue-source'),
            s.appendChild(h),
            A.customIssueSource.call(this, e, t, n, h, l)
        } else {
          var h
          ;(h = z.createElement('div')).className = M + 'issue-source'
          var b = z.createElement('div')
          b.className = M + 'issue-source-header'
          var f = z.createElement('strong')
          f.innerHTML = _global.HTMLCS.getTranslation('auditor_code_snippet')
          var C = I(
            M + 'button-point-to-element-' + e,
            'pointer',
            _global.HTMLCS.getTranslation('auditor_point_to_element'),
            function () {
              x.pointToElement(t.element)
            }
          )
          if ((b.appendChild(f), b.appendChild(C), h.appendChild(b), t.element.outerHTML)) {
            var v = '',
              H = ''
            if (31 < t.element.innerHTML.length)
              var T = t.element.outerHTML.replace(
                t.element.innerHTML,
                t.element.innerHTML.substr(0, 31) + '...'
              )
            else T = t.element.outerHTML
            for (var y = t.element.previousSibling; v.length <= 31 && null !== y; )
              1 === y.nodeType
                ? (v = y.outerHTML)
                : 3 === y.nodeType &&
                  (v = void 0 !== y.textContent ? y.textContent + v : y.nodeValue + v),
                31 < v.length && (v = '...' + v.substr(v.length - 31)),
                (y = y.previousSibling)
            for (var k = t.element.nextSibling; H.length <= 31 && null !== k; )
              1 === k.nodeType
                ? (H += k.outerHTML)
                : 3 === k.nodeType &&
                  (void 0 !== k.textContent ? (H += k.textContent) : (H += k.nodeValue)),
                31 < H.length && (H = H.substr(0, 31) + '...'),
                (k = k.nextSibling)
            ;(G = z.createElement('div')).className = M + 'issue-source-inner'
            var w = z.createElement('strong')
            void 0 !== w.textContent ? (w.textContent = T) : (w.innerText = T),
              G.appendChild(z.createTextNode(v)),
              G.appendChild(w),
              G.appendChild(z.createTextNode(H)),
              h.appendChild(G)
          } else if ('#document' === t.element.nodeName);
          else {
            var G
            ;(G = z.createElement('div')).className = M + 'issue-source-not-supported'
            var S = _global.HTMLCS.getTranslation('auditor_unsupported_browser')
            G.appendChild(z.createTextNode(S)), h.appendChild(G)
          }
          s.appendChild(h)
        }
        return s
      },
      h = function (e) {
        var t = T[Number(e)]
        if (t.element) {
          var n = z.getElementById(M + 'button-point-to-element-' + e)
          if (
            ((E.container = x.pointerContainer || z.getElementById('HTMLCS-wrapper')),
            !1 === E.isPointable(t.element))
          ) {
            var i = E.getPointer(t.element)
            E.pointer && (i.className += ' HTMLCS-pointer-hidden'),
              n && (n.className += ' disabled')
          } else n && (n.className = n.className.replace(' disabled', '')), E.pointTo(t.element)
        }
      },
      m = function (e, t) {
        if (0 !== e.length) {
          var n = e.shift()
          HTMLCS.loadStandard(n, function () {
            m(e, t)
          })
        } else t.call(this)
      }
    ;(this.setOption = function (e, t) {
      A[e] = t
    }),
      (this.getIssue = function (e) {
        return T[e]
      }),
      (this.countIssues = function (e) {
        for (var t = { error: 0, warning: 0, notice: 0 }, n = 0; n < e.length; n++)
          switch (e[n].type) {
            case HTMLCS.ERROR:
              t.error++
              break
            case HTMLCS.WARNING:
              t.warning++
              break
            case HTMLCS.NOTICE:
              t.notice++
          }
        return t
      }),
      (this.build = function (e, t, n) {
        var i = null
        if (z) i = z.getElementById(M + 'wrapper')
        for (var a = 0, o = 0, r = 0, s = 0; s < t.length; s++) {
          var l = !1
          switch (t[s].type) {
            case HTMLCS.ERROR:
              !1 === A.show.error ? (l = !0) : a++
              break
            case HTMLCS.WARNING:
              !1 === A.show.warning ? (l = !0) : o++
              break
            case HTMLCS.NOTICE:
              !1 === A.show.notice ? (l = !0) : r++
          }
          !0 === l && (t.splice(s, 1), s--)
        }
        T = t
        for (s = 0; s < t.length; s++)
          s % 5 == 0 &&
            ('<ol class="HTMLCS-issue-list"', 0 === s && 'style="margin-left: 0em"', '>'),
            v(s, t[s]),
            (s % 5 != 4 && s !== t.length - 1) || '</ol>',
            k(s, t[s], e)
        if (
          (((i = z.createElement('div')).id = M + 'wrapper'),
          (i.className = 'showing-issue-list'),
          !0 !== A.noHeader)
        ) {
          var d = f(e, i)
          i.appendChild(d)
        }
        var u = (function (e, t, n) {
            var i = z.createElement('div')
            i.className = M + 'summary'
            var a = z.createElement('div')
            ;(a.className = M + 'summary-left'), i.appendChild(a)
            var o = z.createElement('div')
            ;(o.className = M + 'summary-right'), i.appendChild(o)
            var r = []
            if (0 < e) {
              var s = _global.HTMLCS.getTranslation('auditor_errors')
              1 === e && (s = _global.HTMLCS.getTranslation('auditor_error')),
                r.push('<strong>' + e + '</strong> ' + s)
            }
            0 < t &&
              ((s = _global.HTMLCS.getTranslation('auditor_warnings')),
              1 === t && (s = _global.HTMLCS.getTranslation('auditor_warning')),
              r.push('<strong>' + t + '</strong> ' + s))
            0 < n &&
              ((s = _global.HTMLCS.getTranslation('auditor_notices')),
              1 === n && (s = _global.HTMLCS.getTranslation('auditor_notice')),
              r.push('<strong>' + n + '</strong> ' + s))
            var l = z.createElement('ol')
            l.className = M + 'lineage'
            var d = z.createElement('li')
            d.className = M + 'lineage-item'
            var u = z.createElement('a')
            ;(u.className = M + 'lineage-link'), (u.href = 'javascript:')
            var _ = z.createElement('span')
            ;(_.innerHTML = 'Home'),
              u.appendChild(_),
              (u.onmousedown = function () {
                x.run(L, H, A)
              })
            var c = z.createElement('li')
            return (
              (c.className = M + 'lineage-item'),
              (c.innerHTML = r.join(', &#160;<span class="HTMLCS-divider"></span>')),
              d.appendChild(u),
              l.appendChild(d),
              l.appendChild(c),
              a.appendChild(l),
              o.appendChild(z.createTextNode(String.fromCharCode(160))),
              i
            )
          })(a, o, r),
          _ = C(1, t.length)
        ;((g = z.createElement('div')).id = M + 'issues-wrapper'),
          (g.className = M + 'inner-wrapper')
        var c = (function (e) {
          var t = 300 * Math.ceil(e.length / 5),
            n = z.createElement('div')
          ;(n.id = M + 'issues'),
            (n.className = M + 'details'),
            n.setAttribute('style', 'width: ' + t + 'px'),
            ((a = z.createElement('ol')).className = M + 'issue-list'),
            a.setAttribute('style', 'margin-left: 0')
          for (var i = 0; i < e.length; i++) {
            var a
            0 < i &&
              i % 5 == 0 &&
              (n.appendChild(a), ((a = z.createElement('ol')).className = M + 'issue-list'))
            var o = v(i, e[i])
            a.appendChild(o)
          }
          return n.appendChild(a), n
        })(t)
        g.appendChild(c)
        var m = (function (e, t) {
          var n = z.createElement('div')
          n.className = M + 'navigation'
          var i = z.createElement('span')
          ;(i.className = M + 'nav-button ' + M + 'previous'),
            (i.innerHTML = String.fromCharCode(160)),
            1 === e && (i.className += ' ' + M + 'disabled'),
            n.appendChild(i)
          var a = z.createElement('span')
          ;(a.className = M + 'page-number'),
            (a.innerHTML =
              _global.HTMLCS.getTranslation('auditor_page') +
              ' ' +
              e +
              ' ' +
              _global.HTMLCS.getTranslation('auditor_of') +
              ' ' +
              t),
            n.appendChild(a)
          var o = z.createElement('span')
          return (
            (o.className = M + 'nav-button ' + M + 'next'),
            (o.innerHTML = String.fromCharCode(160)),
            e === t && (o.className += ' ' + M + 'disabled'),
            n.appendChild(o),
            (i.onclick = function () {
              1 < b && 1 == --b && (i.className += ' ' + M + 'disabled'),
                1 < t && (o.className = o.className.replace(new RegExp(' ' + M + 'disabled'), '')),
                (a.innerHTML = ''),
                a.appendChild(
                  document.createTextNode(
                    _global.HTMLCS.getTranslation('auditor_page') +
                      ' ' +
                      b +
                      ' ' +
                      _global.HTMLCS.getTranslation('auditor_of') +
                      ' ' +
                      t
                  )
                ),
                (z.querySelectorAll('.HTMLCS-issue-list')[0].style.marginLeft =
                  -300 * (b - 1) + 'px')
            }),
            (o.onclick = function () {
              b < t && ++b === t && (o.className += ' ' + M + 'disabled'),
                1 < t && (i.className = i.className.replace(new RegExp(' ' + M + 'disabled'), '')),
                (a.innerHTML = ''),
                a.appendChild(
                  document.createTextNode(
                    _global.HTMLCS.getTranslation('auditor_page') +
                      ' ' +
                      b +
                      ' ' +
                      _global.HTMLCS.getTranslation('auditor_of') +
                      ' ' +
                      t
                  )
                ),
                (z.querySelectorAll('.HTMLCS-issue-list')[0].style.marginLeft =
                  -300 * (b - 1) + 'px')
            }),
            n
          )
        })(1, Math.ceil(t.length / 5))
        g.appendChild(m)
        var g,
          p = z.createElement('div')
        ;(p.className = M + 'outer-wrapper'),
          p.appendChild(g),
          ((g = z.createElement('div')).id = M + 'issues-detail-wrapper'),
          (g.className = M + 'inner-wrapper')
        var h = (function (e) {
          var t = 300 * e.length,
            n = z.createElement('div')
          ;(n.id = M + 'issues-detail'),
            (n.className = M + 'details'),
            n.setAttribute('style', 'width: ' + t + 'px')
          var i = z.createElement('ol')
          ;(i.className = M + 'issue-detail-list'), i.setAttribute('style', 'margin-left: 0')
          for (var a = 0; a < e.length; a++) {
            var o = k(a, e[a])
            i.appendChild(o)
          }
          return n.appendChild(i), n
        })(t)
        return (
          g.appendChild(h),
          p.appendChild(g),
          i.appendChild(u),
          i.appendChild(_),
          i.appendChild(p),
          i
        )
      }),
      (this.buildSummaryPage = function () {
        var e = z.createElement('div')
        if (((e.id = M + 'wrapper'), (e.className = 'showing-settings'), !0 !== A.noHeader)) {
          var t = f(L, e)
          e.appendChild(t)
        }
        var n = (function () {
          var e = z.createElement('div')
          e.className = M + 'settings'
          var t = z.createElement('div')
          t.id = M + 'settings-use-standard'
          var n = z.createElement('label')
          ;(n.innerHTML = _global.HTMLCS.getTranslation('auditor_standards') + ':'),
            n.setAttribute('for', M + 'settings-use-standard-select')
          var i = z.createElement('select')
          ;(i.id = M + 'settings-use-standard-select'), (i.innerHTML = '')
          for (var a = HTMLCSAuditor.getStandardList(), o = 0; o < a.length; o++) {
            var r = a[o],
              s = z.createElement('option')
            ;(s.value = r),
              (s.innerHTML = _global['HTMLCS_' + r].name),
              r === L && (s.selected = !0),
              i.appendChild(s),
              (i.onchange = function () {
                ;(L = this.options[this.selectedIndex].value), x.run(L, H, A)
              })
          }
          var l = z.createElement('div')
          l.id = M + 'settings-issue-count'
          var d = z.createElement('div')
          ;(d.id = M + 'settings-issue-count-help'),
            (d.innerHTML = _global.HTMLCS.getTranslation('auditor_select_types'))
          var u = z.createElement('div')
          ;(u.id = M + 'settings-view-report'),
            (u.innerHTML = _global.HTMLCS.getTranslation('auditor_view_report')),
            (u.onclick = function () {
              if (!1 === /disabled/.test(this.className)) {
                A.show = {
                  error: z.getElementById(M + 'include-error').checked,
                  warning: z.getElementById(M + 'include-warning').checked,
                  notice: z.getElementById(M + 'include-notice').checked,
                }
                var e = z.getElementById(M + 'wrapper'),
                  t = x.build(L, T, A)
                A.parentElement
                  ? A.parentElement.replaceChild(t, e)
                  : ((t.style.left = e.style.left),
                    (t.style.top = e.style.top),
                    z.body.replaceChild(t, e)),
                  A.listUpdateCallback && A.listUpdateCallback.call(this, T)
              }
            })
          z.getElementById(M + 'wrapper')
          var _ = x.countIssues(T)
          for (var c in (void 0 === A.show &&
            0 < T.length &&
            ((A.show = { error: !0, warning: !0, notice: !1 }),
            0 === _.error && 0 === _.warning && (A.show.notice = !0)),
          _)) {
            var m = _[c],
              g = z.createElement('div')
            g.className = M + 'issue-tile ' + M + c.toLowerCase()
            var p = null,
              h = z.createElement('div')
            ;(h.className = 'HTMLCS-tile-text'),
              'error' == c &&
                ((p = _global.HTMLCS.getTranslation('auditor_error')),
                1 !== m && (p = _global.HTMLCS.getTranslation('auditor_errors'))),
              'warning' == c &&
                ((p = _global.HTMLCS.getTranslation('auditor_warning')),
                1 !== m && (p = _global.HTMLCS.getTranslation('auditor_warnings'))),
              'notice' == c &&
                ((p = _global.HTMLCS.getTranslation('auditor_notice')),
                1 !== m && (p = _global.HTMLCS.getTranslation('auditor_notices')))
            var b = '<strong>' + m + '</strong> ' + p
            if (((h.innerHTML = b), void 0 === A.show))
              var f = !1,
                C = !0
            else (f = A.show[c]), (C = !1), 0 === m && (C = !(f = !1))
            var v = y(
              M + 'include-' + c,
              'Toggle display of ' + c + ' messages',
              f,
              C,
              function (e) {
                var t = !1
                !1 === z.getElementById(M + 'include-error').disabled &&
                  ((A.show.error = z.getElementById(M + 'include-error').checked),
                  (t = t || A.show.error)),
                  !1 === z.getElementById(M + 'include-warning').disabled &&
                    ((A.show.warning = z.getElementById(M + 'include-warning').checked),
                    (t = t || A.show.warning)),
                  !1 === z.getElementById(M + 'include-notice').disabled &&
                    ((A.show.notice = z.getElementById(M + 'include-notice').checked),
                    (t = t || A.show.notice)),
                  !0 === t
                    ? (u.className = u.className.replace(/ disabled/g, ''))
                    : (u.className += ' disabled')
              }
            )
            g.appendChild(h), g.appendChild(v), l.appendChild(g)
          }
          void 0 !== A.show
            ? !1 === (A.show.error || A.show.warning || A.show.notice) &&
              (u.className += ' disabled')
            : (u.className += ' disabled')
          return (
            t.appendChild(n),
            t.appendChild(i),
            e.appendChild(t),
            e.appendChild(l),
            e.appendChild(d),
            e.appendChild(u),
            e
          )
        })()
        return e.appendChild(n), e
      }),
      (this.changeScreen = function (e) {
        var t = z.getElementById(M + 'wrapper')
        ;(t.className = t.className.replace(new RegExp('showing-' + c), '')),
          (t.className += ' showing-' + e),
          (t.className = t.className.replace(/\s+/, ' ')),
          (c = e)
      }),
      (this.includeCss = function (e, t) {
        if (!1 !== A.includeCss) {
          void 0 === t && (t = z)
          for (
            var n = t.querySelector('head'), i = n.getElementsByTagName('link'), a = !1, o = 0;
            o < i.length;
            o++
          )
            if (!0 === new RegExp(e + '.css').test(i[o].getAttribute('href'))) {
              a = !0
              break
            }
          if (!1 === a) {
            var r = t.createElement('link')
            ;(r.rel = 'stylesheet'),
              (r.type = 'text/css'),
              (r.href = A.path + e + '.css'),
              n.appendChild(r)
          }
        }
      }),
      (this.getStandardList = function () {
        var e = /^HTMLCS_[^_]+$/,
          t = []
        for (i in window)
          if (!0 === e.test(i)) {
            var n = window[i]
            n.sniffs && n.name && t.push(i.substr(7))
          }
        return t
      }),
      (this.getParentElement = function () {
        var e = null
        if (A.parentElement) e = A.parentElement
        else if (0 < N.frames.length) {
          for (var t = -1, n = null, i = 0; i < N.frames.length; i++)
            try {
              if (
                'frame' === window.frames[i].frameElement.nodeName.toLowerCase() &&
                window.frames[i].document
              ) {
                var a = window.frames[i].innerWidth * window.frames[i].innerHeight
                t < a && ((t = a), (n = window.frames[i].document.body))
              }
            } catch (e) {}
          e = null === n ? document.body : n
        } else e = document.body
        return e
      }),
      (this.getOwnerDocument = function () {
        var e = this.getParentElement()
        return e.ownerDocument && (e = e.ownerDocument), e
      }),
      (this.getDocumentLanguage = function () {
        var e = this.getOwnerDocument().getElementsByTagName('html')[0]
        if (e) {
          var t = e.getAttribute('lang')
          if (t) return t
        }
        return 'en'
      }),
      (this.run = function (s, e, l) {
        N = window
        for (var t = this.getStandardList(), n = [], i = 0; i < t.length; i++)
          _global['HTMLCS_' + t[i]] || n.push(t[i])
        if (0 < n.length)
          m(n, function () {
            x.run(s, e, l)
          })
        else {
          if (null == e) {
            if (
              ((e = []),
              0 === document.querySelectorAll('frameset').length && e.push(document),
              0 < N.frames.length)
            )
              for (i = 0; i < N.frames.length; i++)
                try {
                  e.push(N.frames[i].document)
                } catch (e) {}
          } else if (e.nodeName) {
            if ('input' === e.nodeName.toLowerCase())
              if (!1 === e.hasAttribute('type')) e = e.value
              else 'text' === e.getAttribute('type').toLowerCase() && (e = e.value)
            else 'textarea' === e.nodeName.toLowerCase() && (e = e.value)
          }
          e instanceof Array == !1 && (e = [e]),
            void 0 === l && (l = {}),
            (L = s),
            (H = e),
            (A = l),
            (b = 1),
            (c = ''),
            (T = [])
          var d = this.getParentElement()
          ;(z = this.getOwnerDocument()),
            A.path || (A.path = './'),
            l.lang || (A.lang = this.getDocumentLanguage()),
            void 0 === A.includeCss && (A.includeCss = !0),
            void 0 === A.ignoreMsgCodes && (A.ignoreMsgCodes = []),
            this.includeCss('HTMLCS')
          var a = z.getElementById(M + 'wrapper'),
            u = !1,
            _ = x.buildSummaryPage()
          ;(_.className += ' HTMLCS-processing'),
            a
              ? ((_.style.left = a.style.left), (_.style.top = a.style.top), d.replaceChild(_, a))
              : (A.openCallback && A.openCallback.call(this), (u = !0), d.appendChild(_))
          var o = function () {
              for (var e = 0; e < T.length; e++) {
                var t = !1
                _ &&
                  (_ === T[e].element
                    ? (t = !0)
                    : T[e].element.documentElement
                      ? (t = !1)
                      : _.contains && !0 === _.contains(T[e].element)
                        ? (t = !0)
                        : _.compareDocumentPosition &&
                          0 < (16 & _.compareDocumentPosition(T[e].element)) &&
                          (t = !0))
                for (var n = 0; n < l.ignoreMsgCodes.length; n++)
                  if (!0 === new RegExp(l.ignoreMsgCodes[n]).test(T[e].code)) {
                    t = !0
                    break
                  }
                !0 === t && (T.splice(e, 1), e--)
              }
              var i = {
                  uaAcct: '359178.17',
                  self: this,
                  domainHash: function (e) {
                    for (var t = 0, n = 0, i = e.length - 1; 0 <= i; i--) {
                      var a = e.charCodeAt(i)
                      t =
                        0 != (n = 266338304 & (t = ((t << 6) & 268435455) + a + (a << 14)))
                          ? t ^ (n >> 21)
                          : t
                    }
                    return t
                  },
                  rand: function () {
                    return Math.floor(2147483648 * Math.random())
                  },
                  buildUtma: function () {
                    var e = []
                    return (
                      e.push(this.domainHash(document.location.hostname)),
                      e.push(this.rand()),
                      e.push(Math.floor(new Date().getTime() / 1e3)),
                      e.push(e[2]),
                      e.push(e[2]),
                      e.push(1),
                      e.join('.')
                    )
                  },
                  renewUtma: function (e, t) {
                    var n = this.getCookie('utmc')
                    return (
                      (!0 !== t && n) ||
                        ((e = e.split('.'))[5]++,
                        (e[3] = e[4]),
                        (e[4] = Math.floor(new Date().getTime() / 1e3)),
                        (e = e.join('.'))),
                      e
                    )
                  },
                  buildCustomVars: function (e, t, n, i) {
                    var a = [e, t, n, i],
                      o = ''
                    return (
                      (o += '8(' + ['Standard', 'Errors', 'Warnings', 'Notices'].join('*') + ')'),
                      (o += '9(' + a.join('*') + ')')
                    )
                  },
                  url: function (e, t, n, i, a) {
                    var o = 'http://www.google-analytics.com/__utm.gif?'
                    'https:' === location.protocol &&
                      (o = 'https://ssl.google-analytics.com/__utm.gif?')
                    var r = this.getCookie('utma')
                    r = r ? this.renewUtma(r, a) : this.buildUtma()
                    var s = new Date()
                    s.setFullYear(s.getFullYear() + 2),
                      this.setCookie('utma', r, s),
                      this.setCookie('utmc', this.domainHash(document.location.hostname))
                    var l = {
                      utmwv: '0.0',
                      utmn: this.rand(),
                      utmhn: document.location.hostname,
                      utmp: document.location.pathname,
                      utmac: 'UA-' + this.uaAcct.split('.').join('-'),
                      utme: this.buildCustomVars(e, t, n, i),
                      utmcc: '__utma=' + r + ';',
                    }
                    for (varName in l) o += escape(varName) + '=' + escape(l[varName]) + '&'
                    return o
                  },
                  setCookie: function (e, t, n) {
                    var i = (e = '__htmlcs.' + e) + '=' + t
                    ;(i += ';path=/'),
                      n && (i += ';expires=' + escape(n.toString())),
                      (document.cookie = i)
                  },
                  cookieExists: function (e) {
                    return (
                      (e = '__htmlcs.' + e),
                      new RegExp(
                        '(?:^|;\\s*)' + escape(e).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\='
                      ).test(document.cookie)
                    )
                  },
                  getCookie: function (e) {
                    return !1 === this.cookieExists(e)
                      ? null
                      : ((e = '__htmlcs.' + e),
                        unescape(
                          document.cookie.replace(
                            new RegExp(
                              '(?:^|.*;\\s*)' +
                                escape(e).replace(/[\-\.\+\*]/g, '\\$&') +
                                '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'
                            ),
                            '$1'
                          )
                        ))
                  },
                },
                a = x.countIssues(T),
                o = z.createElement('img')
              if (
                ((o.src = i.url(s, a.error, a.warning, a.notice, u)),
                (o.style.display = 'none'),
                A.runCallback)
              ) {
                var r = A.runCallback.call(this, T, u)
                r instanceof Array == !0 && (T = r)
              }
              setTimeout(function () {
                var e = z.getElementById(M + 'wrapper'),
                  t = x.buildSummaryPage()
                ;(t.style.left = e.style.left), (t.style.top = e.style.top), d.replaceChild(t, e)
              }, 400)
            },
            r = function (e, t) {
              for (var n = t.shift(); !n; ) {
                if (0 === t.length) return void o()
                n = t.shift()
              }
              HTMLCS.process(
                e,
                n,
                function () {
                  ;(T = T.concat(HTMLCS.getMessages())), 0 === t.length ? o() : r(e, t)
                },
                function () {},
                l.lang
              )
            }
          r(s, H.concat([]))
        }
      }),
      (this.versionCheck = function (e) {
        if (e && null !== e.currentVersion && e.newVersion > e.currentVersion) {
          var t = z.createElement('div')
          ;(t.id = M + 'settings-updated-notification'),
            z.documentElement.querySelector('.HTMLCS-settings').appendChild(t)
          var n = 'HTML_CodeSniffer has been updated to version ' + e.newVersion + '.'
          ;(n +=
            ' <a href="http://squizlabs.github.io/HTML_CodeSniffer/patches/' +
            e.newVersion +
            '">View the changelog</a>'),
            (t.innerHTML = n)
        }
      }),
      (this.close = function () {
        if (z) {
          var e = z.getElementById('HTMLCS-wrapper')
          if (e) {
            var t = E.getPointer(e)
            t && t.parentNode && t.parentNode.removeChild(t),
              e.parentNode.removeChild(e),
              A.closeCallback && (T = A.closeCallback.call(this))
          }
        }
      }),
      (this.pointToElement = function (e) {
        ;(E.container = x.pointerContainer || z.getElementById('HTMLCS-wrapper')), E.pointTo(e)
      }),
      (this.getCurrentStandard = function () {
        return L
      })
    var E = {
      pointerDim: {},
      container: null,
      getBoundingRectangle: function (e) {
        if (!e) return null
        var t = this.getElementCoords(e),
          n = this.getElementDimensions(e)
        return { x1: t.x, y1: t.y, x2: t.x + n.width, y2: t.y + n.height }
      },
      getElementDimensions: function (e) {
        return { width: e.offsetWidth, height: e.offsetHeight }
      },
      getElementCoords: function (e, t) {
        var n = 0,
          i = 0,
          a = HTMLCS.util.getElementWindow(e)
        if (!0 === t) var o = a.top
        else o = a
        for (;;) {
          for (; (n += e.offsetLeft), (i += e.offsetTop), (e = e.offsetParent); );
          if (a === o) break
          if (((e = a.frameElement), (a = a.parent), 'frame' === e.nodeName.toLowerCase())) break
        }
        return { x: n, y: i }
      },
      getWindowDimensions: function (e) {
        var t = HTMLCS.util.getElementWindow(e),
          n = e.ownerDocument,
          i = 0,
          a = 0
        if (t.innerWidth) {
          ;(i = t.innerWidth), (a = t.innerHeight)
          var o = this.getScrollbarWidth(e)
          n.documentElement.scrollHeight > a && 'number' == typeof o && (i -= o),
            n.body.scrollWidth > i && 'number' == typeof o && (a -= o)
        } else
          n.documentElement && (n.documentElement.clientWidth || n.documentElement.clientHeight)
            ? ((i = n.documentElement.clientWidth), (a = n.documentElement.clientHeight))
            : n.body &&
              (n.body.clientWidth || n.body.clientHeight) &&
              ((i = n.body.clientWidth), (a = n.body.clientHeight))
        return { width: i, height: a }
      },
      getScrollbarWidth: function (e) {
        if (null !== r) return r
        doc = e.ownerDocument
        var t,
          n,
          i = null,
          a = null
        ;((i = doc.createElement('div')).style.position = 'absolute'),
          (i.style.top = '-1000px'),
          (i.style.left = '-1000px'),
          (i.style.width = '100px'),
          (i.style.height = '50px'),
          (i.style.overflow = 'hidden'),
          ((a = doc.createElement('div')).style.width = '100%'),
          (a.style.height = '200px'),
          i.appendChild(a),
          z.body.appendChild(i),
          (t = a.offsetWidth),
          (i.style.overflow = 'auto'),
          (n = a.offsetWidth),
          doc.body.removeChild(doc.body.lastChild)
        var o = t - n
        return (r = o)
      },
      getScrollCoords: function (e) {
        var t = HTMLCS.util.getElementWindow(e)
        doc = e.ownerDocument
        var n = 0,
          i = 0
        return (
          (i = t.pageYOffset
            ? ((n = t.pageXOffset), t.pageYOffset)
            : doc.body && (doc.body.scrollLeft || doc.body.scrollTop)
              ? ((n = doc.body.scrollLeft), doc.body.scrollTop)
              : ((n = doc.documentElement.scrollLeft), doc.documentElement.scrollTop)),
          { x: n, y: i }
        )
      },
      isPointable: function (e) {
        if (null === e.ownerDocument) return !1
        for (var t = e.parentNode; t && t.ownerDocument; ) t = t.parentNode
        return (
          null !== t &&
          !0 !== HTMLCS.util.isVisuallyHidden(e) &&
          null !== this.getPointerDirection(e)
        )
      },
      getPointerDirection: function (e) {
        var t = null,
          n = this.getBoundingRectangle(e),
          i = this.getPointer(e),
          a = e.ownerDocument
        ;(i.className = i.className.replace('HTMLCS-pointer-hidden', '')),
          (i.className += ' HTMLCS-pointer-hidden-block'),
          (this.pointerDim.height = 62),
          (this.pointerDim.width = 62)
        var o = this.getWindowDimensions(e),
          r =
            (HTMLCS.util.getElementWindow(e),
            Math.max(0, Math.min(n.y1 - 100, a.documentElement.offsetHeight - o.height)))
        return (
          n.y1 - this.pointerDim.height - 20 > r
            ? (t = 'down')
            : n.y2 + this.pointerDim.height < o.height - r
              ? (t = 'up')
              : n.x2 + this.pointerDim.width < o.width
                ? (t = 'left')
                : 0 < n.x1 - this.pointerDim.width && (t = 'right'),
          (i.className = i.className.replace('HTMLCS-pointer-hidden-block', '')),
          (i.className += ' HTMLCS-pointer-hidden'),
          t
        )
      },
      pointTo: function (e) {
        if (e.ownerDocument) var t = e.ownerDocument
        else t = e
        var n = t.getElementById('HTMLCS-pointer')
        if ((n && n.parentNode.removeChild(n), !1 !== this.isPointable(e))) {
          var i = HTMLCS.util.getElementWindow(e).top,
            a = (this.getWindowDimensions(i.document.documentElement), this.getPointerDirection(e)),
            o = this.getPointer(e)
          if (((o.className = o.className.replace('HTMLCS-pointer-hidden-block', '')), null === a))
            o.className += ' HTMLCS-pointer-hidden'
          else {
            var r = !1
            if ('fixed' === HTMLCS.util.style(e).position) r = !0
            for (var s = e.parentNode; s.ownerDocument; ) {
              if ('fixed' === HTMLCS.util.style(s).position) {
                r = !0
                break
              }
              s = s.parentNode
            }
            if (!0 === r) o.style.position = 'fixed'
            else {
              o.style.position = 'absolute'
              for (
                var l = this.getElementCoords(e, !0),
                  d = HTMLCS.util.getElementWindow(e),
                  u = Math.max(l.y - 100, 0);
                0 <= u;

              ) {
                if (
                  (d.scrollTo(0, u),
                  (u -= this.getScrollCoords(d.document.documentElement).y),
                  (u = Math.max(u, 0)),
                  d === i)
                )
                  break
                d = d.parent
              }
            }
            this.showPointer(e, a)
          }
        }
      },
      getPointer: function (e) {
        try {
          var t = e.ownerDocument
          HTMLCSAuditor.includeCss('HTMLCS', t)
          var n = 'HTMLCS',
            i = t.getElementById(n + '-pointer')
          i ||
            (((i = t.createElement('div')).id = n + '-pointer'),
            (i.className = n + '-pointer ' + n + '-pointer-hidden'),
            t.body.appendChild(i))
        } catch (e) {}
        return i
      },
      showPointer: function (e, t) {
        var n = this.getPointer(e)
        this._removeDirectionClasses(n),
          (n.className += ' HTMLCS-pointer-' + t),
          (n.className = n.className.replace('HTMLCS-pointer-hidden', ''))
        var i = this.getBoundingRectangle(e),
          a = 0,
          o = 0,
          r = 20
        switch (t) {
          case 'up':
            ;(r = -r),
              (a = i.y2),
              (o = i.x2 - i.x1 < 250 ? this.getRectMidPnt(i) - this.pointerDim.width / 2 : i.x1)
            break
          case 'down':
          default:
            ;(a = i.y1 - this.pointerDim.height),
              (o = i.x2 - i.x1 < 250 ? this.getRectMidPnt(i) - this.pointerDim.width / 2 : i.x1)
            break
          case 'left':
            ;(o = i.x2), (a = this.getRectMidPnt(i, !0) - this.pointerDim.height / 2)
            break
          case 'right':
            ;(r = -r),
              (o = i.x1 - this.pointerDim.width),
              (a = this.getRectMidPnt(i, !0) - this.pointerDim.height / 2)
        }
        var s = this.getScrollCoords(e)
        ;(n.style.top = a + 'px'), (n.style.left = o + 'px')
        var l = this.getBoundingRectangle(this.container),
          d = (i = this.getBoundingRectangle(n)).x1 + (i.x2 - i.x1) / 2,
          u = i.y1 + (i.y2 - i.y1) / 2
        if (
          ('fixed' !== HTMLCS.util.style(n).position && (u -= s.y),
          l.x1 <= d && l.x2 >= d && l.y1 <= u && l.y2 >= u)
        ) {
          var _ = this
          ;(this.container.className += ' HTMLCS-translucent'),
            setTimeout(function () {
              _.container.className = _.container.className.replace('HTMLCS-translucent', '')
            }, 4e3)
        }
        this.bounce(
          n,
          function () {
            setTimeout(function () {
              n.parentNode && n.parentNode.removeChild(n)
            }, 1500)
          },
          t
        )
      },
      bounce: function (e, t, n) {
        var i,
          a = n,
          o = '',
          r = 0
        switch (n) {
          case 'up':
            ;(a = n + '-op'), (r = 30)
          case 'down':
            o = 'top'
            break
          case 'left':
            ;(a = n + '-op'), (r = 30)
          case 'right':
            o = 'left'
        }
        var s = (i = Number(e.style[o].replace('px', '')) + r),
          l = i - 30,
          d = 0,
          u = setInterval(function () {
            if (a === n) {
              if ((s--, (e.style[o] = s + 'px'), s < l && ((a = n + '-op'), 5 === d && 0 !== r)))
                return clearInterval(u), void t.call(this)
            } else if ((s++, (e.style[o] = s + 'px'), i <= s && ((a = n), 5 === ++d && 0 === r)))
              return clearInterval(u), void t.call(this)
          }, 10)
      },
      getRectMidPnt: function (e, t) {
        return !0 === t ? e.y1 + (e.y2 - e.y1) / 2 : e.x1 + (e.x2 - e.x1) / 2
      },
      _removeDirectionClasses: function (e) {
        for (var t = ['down', 'up', 'left', 'right'], n = t.length, i = 0; i < n; i++)
          e.className = e.className.replace('HTMLCS-pointer-' + t[i], '')
      },
    }
  })() // Expose globals.
  return _global
})
