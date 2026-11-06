# 项目影像目录

精选工程现场、实验室装置和模型演示，用于理解系统组成及作业方式。视频统一移除音轨与非必要元数据；设备近景优先，原始长视频保留在本地。

首页优先展示约51秒的三维作业动画，便于先理解工作原理，再查看现场与实验室记录。

## 视频

| 名称 | 文件 | 内容与边界 |
| --- | --- | --- |
| 现场设备喷雾 | [field-spray.mp4](assets/videos/field-spray.mp4) | 30秒设备近景，原现场记录50–80秒；喷雾作业影像不单独证明灭火性能 |
| 机械臂与升降立柱 | [robot-motion.mp4](assets/videos/robot-motion.mp4) | 约14秒实验室动作；演示装置运动，不作定位精度测量 |
| 红外热源跟踪画面 | [thermal-tracking.mp4](assets/videos/thermal-tracking.mp4) | 60秒实验室红外阈值图像；画面温度与现场约100℃热水试验属于不同记录 |
| 三维作业动画 | [operation-animation.mp4](assets/videos/operation-animation.mp4) | 约51秒原项目动画，说明清洗、降温与灭火工作模式，不属于实火试验 |
| 三维模型漫游 | [digital-model.mp4](assets/videos/digital-model.mp4) | 约19秒模型可视化，不属于设备实时状态或现场录像 |

[打开带播放器的在线展厅](https://sheldon123z.github.io/substation-firefighting-robot/#videos)

## 照片与截帧

| 文件 | 内容 | 来源 |
| --- | --- | --- |
| [现场喷雾](assets/images/field-spray.jpg) | 机器人与主变设备喷雾近景 | S2功能验证报告内嵌照片 |
| [实验室装置](assets/images/robot-lab.jpg) | 机械臂、升降立柱与拖链 | 项目“视频/实验视频”装置照片 |
| [升降立柱](assets/images/lift-column.jpg) | 立柱与机械臂结构 | 项目实验室照片 |
| [正面结构](assets/images/robot-front.jpg) | 机械结构正视近景 | 项目实验室照片 |
| [侧面结构](assets/images/robot-side.jpg) | 机械结构侧视近景 | 项目实验室照片 |
| [喷枪近景](assets/images/nozzle-detail.jpg) | 现场机械臂末端与喷枪 | M1现场视频60秒截帧 |
| [热成像画面](assets/images/thermal-tracking.jpg) | 实验室热成像监视器局部 | “热源追踪实验1.mov”8秒截帧，裁切屏幕局部 |
| [三维模型](assets/images/digital-model.jpg) | 主变模型可视化 | 项目三维模型效果图 |
| [动画封面](assets/images/operation-animation.jpg) | 作业动画截帧，非现场影像 | M4动画20秒截帧 |
| [动态预览](assets/images/field-spray-preview.gif) | 现场喷雾前5秒，8帧每秒 | field-spray.mp4派生 |

## 系统界面与现场集成补充照片

以下5张影像由用户于2026年11月6日补充。补充日期不等同于拍摄日期，历史界面及温度标记按原画面理解。

| 文件 | 内容与边界 | 展示处理 |
| --- | --- | --- |
| [现场热成像](assets/images/field-thermal-monitor.jpg) | 主变压器热成像监视器局部；温度为原图显示值，不作为新增实测或精度结论 | 保留热成像区域，裁去浏览器、桌面和显示器周边 |
| [历史上位机界面](assets/images/supervisory-interface.jpg) | 设备状态、三维模型与视频区域的历史截图；不代表当前实时状态 | 裁去设备地址栏和顶部站点选择信息 |
| [现场工控工作站](assets/images/integrated-workstation.jpg) | 工控机、监控显示器与辅助控制设备集成局部 | 裁去顶部地址栏、站点信息及底部门锁钥匙区域，对两处实物钥匙细节作模糊处理 |
| [补充现场喷雾](assets/images/field-spray-additional.jpg) | 机器人与主变设备定向喷雾近景；不单独证明灭火性能 | 裁去上下黑边 |
| [夜间设备舱](assets/images/pump-enclosure-night.jpg) | 高压细水雾智能灭火系统设备舱局部 | 聚焦设备舱，保持原图明暗与标识，不展示完整站区布局 |

源文件名、SHA-256、原图像素裁切区域与模糊区域登记在[媒体清单](assets-manifest.json)。原始照片保留不变；展示图移除EXIF并进行JPEG压缩。

## 结构示意

- [系统功能架构](assets/diagrams/system-architecture.svg)：按感知、分析、决策、执行及反馈组织，依据S1、S2重绘。
- [机械组成](assets/diagrams/mechanical-structure.svg)：六轴机械臂与一轴升降立柱的组成示意，不提供制造尺寸。

影像和原始产品标识的权利归原权利人，公开展示不额外授予再分发和商业使用许可。
