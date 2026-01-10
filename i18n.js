// ===== Internationalization System =====

const i18n = {
    currentLang: 'en',
    translations: {
        en: {
            // Header
            'header.title': 'Qwen Multi-Angle',
            'header.apiKey': 'fal.ai API Key',
            'header.getKey': 'Get key',
            'header.apiKeyPlaceholder': 'Enter your API key...',
            'header.apiKeyHint': '🔒 Stored only in your browser\'s local storage',
            'header.showHide': 'Show/Hide',

            // Tabs
            'tabs.singleImage': 'Single-image',
            'tabs.multiImage': 'Multi-image',
            'tabs.cameraMotion': 'Camera motion',

            // Single Angle Tab
            'single.inputImage': 'Input Image',
            'single.dropImage': 'Drop image here or click to upload',
            'single.orPasteUrl': 'or paste URL',
            'single.urlPlaceholder': 'https://example.com/image.jpg',
            'single.loadBtn': 'Load',
            'single.cameraControl': '3D Camera Control',
            'single.dragHandles': 'Drag handles:',
            'single.azimuth': 'Azimuth',
            'single.elevation': 'Elevation',
            'single.distance': 'Distance',
            'single.manualControls': 'Manual Controls',
            'single.azimuthHorizontal': 'Azimuth (Horizontal)',
            'single.elevationVertical': 'Elevation (Vertical Angle)',
            'single.zoomDistance': 'Zoom (Distance)',
            'single.apiParameters': 'API Parameters',
            'single.generate': 'Generate',
            'single.output': 'Output',
            'single.generatedImageWillAppear': 'Generated image will appear here',
            'single.download': 'Download',
            'single.debugLogs': '🔧 Debug Logs',
            'single.clear': 'Clear',
            'single.ready': 'Ready. Waiting for API call...',
            'single.generating': 'Generating...',

            // Slider labels
            'slider.low': 'Low',
            'slider.eye': 'Eye',
            'slider.bird': 'Bird',
            'slider.wide': 'Wide',
            'slider.medium': 'Medium',
            'slider.close': 'Close',

            // Multi-image Tab
            'multi.inputImage': 'Input Image',
            'multi.dropImage': 'Drop image here or click to upload',
            'multi.orPasteUrl': 'or paste URL',
            'multi.urlPlaceholder': 'https://example.com/image.jpg',
            'multi.loadBtn': 'Load',
            'multi.cameraPath': '3D Camera Path',
            'multi.pathInstructions': 'Hover sphere to preview, scroll to set zoom, click to add waypoint (2-4 points).',
            'multi.zoom': 'Zoom',
            'multi.clearAll': 'Clear All',
            'multi.undo': 'Undo',
            'multi.waypoints': 'Waypoints',
            'multi.clickToAdd': 'Click on the sphere above to add camera positions',
            'multi.generateKeyframes': 'Generate All Keyframes',
            'multi.generatedKeyframes': 'Generated Keyframes',
            'multi.downloadAllZip': 'Download All (ZIP)',
            'multi.keyframesWillAppear': 'Generated keyframes will appear here',
            'multi.debugLogs': '🔧 Debug Logs',
            'multi.clear': 'Clear',
            'multi.pathReady': 'Camera Path mode ready. Add waypoints to begin.',

            // Camera Motion Tab
            'motion.title': 'Camera Motion',
            'motion.subtitle': 'Generate video from the keyframes you created in Multi-image.',
            'motion.tip': 'Tip: Generate keyframes first in Multi-image, then come here to create camera motion video.',
            'motion.createVideo': 'Create Camera Motion Video',
            'motion.modeSubtitle': 'Quick Stitch is instant. AI Video uses Seedance (queued).',
            'motion.quickStitch': 'Quick Stitch',
            'motion.instant': 'Instant',
            'motion.aiVideo': 'AI Video',
            'motion.seedance': 'Seedance',
            'motion.totalDuration': 'Total Duration',
            'motion.transitionStyle': 'Transition Style',
            'motion.frameRate': 'Frame Rate',
            'motion.easing': 'Easing',
            'motion.motionPrompt': 'Motion Prompt',
            'motion.resolution': 'Resolution',
            'motion.perPairDuration': 'Per-pair duration (after speedup)',
            'motion.loopPath': 'Loop back to start (adds last → first)',
            'motion.createBtn': 'Create Video',
            'motion.rendering': 'Rendering...',
            'motion.finalVideo': 'Final Video',
            'motion.videoWillAppear': 'Generated video will appear here',
            'motion.downloadVideo': 'Download Video',

            // Duration options
            'duration.3s': '3 seconds',
            'duration.4s': '4 seconds',
            'duration.5s': '5 seconds',
            'duration.6s': '6 seconds',
            'duration.8s': '8 seconds',

            // Transition styles
            'transition.craneZoom': 'Crane Zoom',
            'transition.smoothPan': 'Smooth Pan',
            'transition.whipPan': 'Whip Pan',
            'transition.dollyZoom': 'Dolly Zoom',

            // Frame rates
            'fps.24': '24 fps (Cinematic)',
            'fps.30': '30 fps',
            'fps.60': '60 fps (Smooth)',

            // Easing types
            'easing.easeInOut': 'Ease In-Out',
            'easing.easeOut': 'Ease Out',
            'easing.linear': 'Linear',
            'easing.bounce': 'Bounce',

            // Resolution
            'resolution.480p': '480p (Faster)',
            'resolution.720p': '720p',

            // Per-pair duration
            'pairDuration.1s': '1 second (fast)',
            'pairDuration.2s': '2 seconds (slower)',
            'pairDuration.3s': '3 seconds (smooth)',

            // Footer
            'footer.poweredBy': 'Powered by',
            'footer.videoBy': 'Video by',

            // Camera angle labels
            'angle.front': 'Front',
            'angle.frontRight': 'Front-Right',
            'angle.right': 'Right',
            'angle.backRight': 'Back-Right',
            'angle.back': 'Back',
            'angle.backLeft': 'Back-Left',
            'angle.left': 'Left',
            'angle.frontLeft': 'Front-Left',

            // Elevation labels
            'elevation.lowAngle': 'Low-angle (looking up)',
            'elevation.eyeLevel': 'Eye-level',
            'elevation.elevated': 'Elevated',
            'elevation.highAngle': 'High-angle',
            'elevation.birdsEye': 'Bird\'s-eye (looking down)',

            // Zoom labels
            'zoom.wideShot': 'Wide shot (far)',
            'zoom.mediumWide': 'Medium-wide',
            'zoom.mediumShot': 'Medium shot',
            'zoom.mediumCloseUp': 'Medium close-up',
            'zoom.closeUp': 'Close-up (very close)',

            // Status messages
            'status.enterApiKey': 'Please enter your fal.ai API key',
            'status.uploadImage': 'Please upload an image or provide a URL',
            'status.generatingKeyframes': 'Generating keyframes...',
            'status.allKeyframesGenerated': 'All keyframes generated!',
            'status.keyframesGenerated': 'Generated {completed}/{total} keyframes',
            'status.addWaypoints': 'Add at least {min} waypoints',
            'status.uploadImagePath': 'Please upload an image (in Camera Path tab) or switch from Single Angle with an image loaded',
            'status.loadingImage': 'Loading image...',
            'status.imageLoaded': 'Image loaded successfully. Base64 size: {size} KB',
            'status.imageGenerated': 'Image generated successfully!',
            'status.videoCreated': 'Video created!',
            'status.downloaded': 'Downloaded!',
            'status.downloadFailed': 'Download failed',

            // Error messages
            'error.noFile': 'No file provided',
            'error.invalidFileType': 'Invalid file type: {type}. Allowed: JPG, PNG, WebP, GIF',
            'error.invalidExtension': 'Invalid file extension. Allowed: {extensions}',
            'error.fileTooLarge': 'File too large: {size}MB. Maximum: 20MB',
            'error.noUrl': 'No URL provided',
            'error.invalidUrl': 'URL must start with http:// or https://',
            'error.urlMayNotBeImage': 'URL may not be an image',
            'error.networkError': 'Network error - check your internet connection',
            'error.invalidApiKey': 'Invalid API key. Please check your fal.ai API key.',
            'error.invalidRequest': 'Invalid request format. Check the logs for details.',
            'error.noImageInResponse': 'No image in response. Check logs for details.',
            'error.failedToUploadImage': 'Failed to upload image',
            'error.noSegmentsGenerated': 'No segments generated',
            'error.stitchingFailed': 'Stitching failed - showing segments',
            'error.need2Keyframes': 'Need at least 2 generated keyframes',

            // Log messages
            'log.uploadingImage': 'Uploading image: {name} ({size} KB, {type})',
            'log.configuringClient': 'Configuring fal client...',
            'log.model': 'Model: {model}',
            'log.camera': 'Camera: horizontal_angle={azimuth}°, vertical_angle={elevation}°, zoom={distance}',
            'log.usingUrl': 'Using provided URL: {url}',
            'log.uploadingToStorage': 'Uploading image to fal storage...',
            'log.imageUploaded': 'Image uploaded: {url}',
            'log.startingInference': 'Starting model inference...',
            'log.input': 'Input: {input}',
            'log.resultReceived': 'Result received!',
            'log.result': 'Result: {result}',
            'log.dataKeys': 'Data keys: {keys}',
            'log.foundImageUrl': 'Found: {path} = {url}',
            'log.success': 'Success! Image URL: {url}...',
            'log.error': 'Error: {message}',
            'log.logsCleared': 'Logs cleared.',
            'log.addedWaypoint': 'Added waypoint {num}: Az={azimuth}°, El={elevation}°',
            'log.removedWaypoint': 'Removed waypoint {num}',
            'log.imagePreviewLoaded': 'Image preview loaded successfully',
            'log.imagePreviewFailed': 'Could not preview image (CORS/network), but URL is set for generation',
            'log.clearedWaypoints': 'Cleared all waypoints',
            'log.removedLastWaypoint': 'Removed last waypoint',
            'log.generatingKeyframe': 'Generating keyframe {current}/{total}: Az={azimuth}°, El={elevation}°',
            'log.keyframeDone': 'Keyframe {num} done: {url}...',
            'log.keyframeFailed': 'Keyframe {num} failed: no image in response',
            'log.keyframeError': 'Keyframe {num} error: {error}',
            'log.syncedImageUrl': 'Synced image from Single Angle tab (URL)',
            'log.syncedImageFile': 'Synced image from Single Angle tab (uploaded file)',
            'log.creatingZip': 'Creating ZIP file...',
            'log.zipComplete': 'ZIP download complete',
            'log.zipError': 'ZIP error: {error}',
            'log.creatingVideo': 'Creating {duration}s video at {fps}fps with {style} transitions',
            'log.renderingRealtime': 'Rendering in real-time (will take ~{duration}s)...',
            'log.loadedKeyframes': 'Loaded {count} keyframe images',
            'log.videoComplete': 'Video rendering complete',
            'log.videoDownloaded': 'Video downloaded',
            'log.generatingSegments': 'Generating {count} Seedance segments ({seconds}s each → {target}s after speedup, {multiplier}x)',
            'log.prompt': 'Prompt: "{prompt}"',
            'log.cacheHit': 'Cache hit: reusing {count} Seedance segments (no model calls).',
            'log.segment': 'Segment {num}: Frame {start} (Az={azStart}°) → Frame {end} (Az={azEnd}°)',
            'log.segmentDone': 'Segment {num} done!',
            'log.segmentFailed': 'Segment {num}: No video in response',
            'log.segmentError': 'Segment {num} failed: {error}',
            'log.savedCache': 'Saved Seedance segments to cache. Next run can skip the queue.',
            'log.downloadingSegments': 'Downloading {count} segments for stitching...',
            'log.downloadedSegment': 'Downloaded segment {num}',
            'log.stitchingSegment': 'Stitching segment {current}/{total}: {duration}s at {speed}x speed...',
            'log.finalVideo': 'Final video: ~{duration} seconds ({count} segments × {perSegment}s)',

            // Progress messages
            'progress.downloadingSegments': 'Downloading segments...',
            'progress.stitching': 'Stitching with 4x speedup...',
            'progress.segment': 'Segment {current}/{total}',
            'progress.frame': 'Frame {current}/{total}',
            'progress.queued': 'Segment {current}/{total} (queued)',
            'progress.rendering': 'Segment {current}/{total} (rendering)',

            // Video completion
            'status.videoDone': 'Done! {duration} second video',
            'status.stitchFailed': 'Stitching failed - showing segments',

            // Waypoint labels
            'waypoint.az': 'Az',
            'waypoint.el': 'El',
            'waypoint.zoom': 'Zoom',
            'waypoint.delete': 'Delete',

            // Gallery labels
            'gallery.keyframe': 'Keyframe',

            // Language
            'lang.english': 'English',
            'lang.chinese': '简体中文'
        },
        zh: {
            // 标题栏
            'header.title': 'Qwen 多角度',
            'header.apiKey': 'fal.ai API 密钥',
            'header.getKey': '获取密钥',
            'header.apiKeyPlaceholder': '请输入您的 API 密钥...',
            'header.apiKeyHint': '🔒 仅存储在您浏览器的本地存储中',
            'header.showHide': '显示/隐藏',

            // 标签页
            'tabs.singleImage': '单图像',
            'tabs.multiImage': '多图像',
            'tabs.cameraMotion': '相机运动',

            // 单角度标签页
            'single.inputImage': '输入图像',
            'single.dropImage': '拖放图像到此处或点击上传',
            'single.orPasteUrl': '或粘贴 URL',
            'single.urlPlaceholder': 'https://example.com/image.jpg',
            'single.loadBtn': '加载',
            'single.cameraControl': '3D 相机控制',
            'single.dragHandles': '拖动手柄：',
            'single.azimuth': '方位角',
            'single.elevation': '仰角',
            'single.distance': '距离',
            'single.manualControls': '手动控制',
            'single.azimuthHorizontal': '方位角（水平）',
            'single.elevationVertical': '仰角（垂直角度）',
            'single.zoomDistance': '缩放（距离）',
            'single.apiParameters': 'API 参数',
            'single.generate': '生成',
            'single.output': '输出',
            'single.generatedImageWillAppear': '生成的图像将显示在这里',
            'single.download': '下载',
            'single.debugLogs': '🔧 调试日志',
            'single.clear': '清除',
            'single.ready': '就绪。等待 API 调用...',
            'single.generating': '生成中...',

            // 滑块标签
            'slider.low': '低',
            'slider.eye': '平视',
            'slider.bird': '俯视',
            'slider.wide': '广角',
            'slider.medium': '中等',
            'slider.close': '特写',

            // 多图像标签页
            'multi.inputImage': '输入图像',
            'multi.dropImage': '拖放图像到此处或点击上传',
            'multi.orPasteUrl': '或粘贴 URL',
            'multi.urlPlaceholder': 'https://example.com/image.jpg',
            'multi.loadBtn': '加载',
            'multi.cameraPath': '3D 相机路径',
            'multi.pathInstructions': '悬停球体预览，滚动设置缩放，点击添加路径点（2-4 个点）。',
            'multi.zoom': '缩放',
            'multi.clearAll': '全部清除',
            'multi.undo': '撤销',
            'multi.waypoints': '路径点',
            'multi.clickToAdd': '点击上方球体添加相机位置',
            'multi.generateKeyframes': '生成所有关键帧',
            'multi.generatedKeyframes': '已生成的关键帧',
            'multi.downloadAllZip': '下载全部（ZIP）',
            'multi.keyframesWillAppear': '生成的关键帧将显示在这里',
            'multi.debugLogs': '🔧 调试日志',
            'multi.clear': '清除',
            'multi.pathReady': '相机路径模式已就绪。添加路径点以开始。',

            // 相机运动标签页
            'motion.title': '相机运动',
            'motion.subtitle': '从您在多图像中创建的关键帧生成视频。',
            'motion.tip': '提示：首先在多图像中生成关键帧，然后来这里创建相机运动视频。',
            'motion.createVideo': '创建相机运动视频',
            'motion.modeSubtitle': '快速拼接是即时的。AI 视频使用 Seedance（排队）。',
            'motion.quickStitch': '快速拼接',
            'motion.instant': '即时',
            'motion.aiVideo': 'AI 视频',
            'motion.seedance': 'Seedance',
            'motion.totalDuration': '总时长',
            'motion.transitionStyle': '过渡样式',
            'motion.frameRate': '帧率',
            'motion.easing': '缓动',
            'motion.motionPrompt': '运动提示词',
            'motion.resolution': '分辨率',
            'motion.perPairDuration': '每对时长（加速后）',
            'motion.loopPath': '循环回到起点（添加最后 → 第一个）',
            'motion.createBtn': '创建视频',
            'motion.rendering': '渲染中...',
            'motion.finalVideo': '最终视频',
            'motion.videoWillAppear': '生成的视频将显示在这里',
            'motion.downloadVideo': '下载视频',

            // 时长选项
            'duration.3s': '3 秒',
            'duration.4s': '4 秒',
            'duration.5s': '5 秒',
            'duration.6s': '6 秒',
            'duration.8s': '8 秒',

            // 过渡样式
            'transition.craneZoom': '升降缩放',
            'transition.smoothPan': '平滑摇移',
            'transition.whipPan': '快速摇移',
            'transition.dollyZoom': '移动缩放',

            // 帧率
            'fps.24': '24 帧/秒（电影感）',
            'fps.30': '30 帧/秒',
            'fps.60': '60 帧/秒（流畅）',

            // 缓动类型
            'easing.easeInOut': '缓入缓出',
            'easing.easeOut': '缓出',
            'easing.linear': '线性',
            'easing.bounce': '弹跳',

            // 分辨率
            'resolution.480p': '480p（更快）',
            'resolution.720p': '720p',

            // 每对时长
            'pairDuration.1s': '1 秒（快速）',
            'pairDuration.2s': '2 秒（较慢）',
            'pairDuration.3s': '3 秒（流畅）',

            // 页脚
            'footer.poweredBy': '技术支持',
            'footer.videoBy': '视频来自',

            // 相机角度标签
            'angle.front': '正面',
            'angle.frontRight': '右前方',
            'angle.right': '右侧',
            'angle.backRight': '右后方',
            'angle.back': '背面',
            'angle.backLeft': '左后方',
            'angle.left': '左侧',
            'angle.frontLeft': '左前方',

            // 仰角标签
            'elevation.lowAngle': '低角度（仰视）',
            'elevation.eyeLevel': '平视',
            'elevation.elevated': '仰角',
            'elevation.highAngle': '高角度',
            'elevation.birdsEye': '鸟瞰（俯视）',

            // 缩放标签
            'zoom.wideShot': '广角镜头（远）',
            'zoom.mediumWide': '中广角',
            'zoom.mediumShot': '中景镜头',
            'zoom.mediumCloseUp': '中特写',
            'zoom.closeUp': '特写（很近）',

            // 状态消息
            'status.enterApiKey': '请输入您的 fal.ai API 密钥',
            'status.uploadImage': '请上传图像或提供 URL',
            'status.generatingKeyframes': '生成关键帧中...',
            'status.allKeyframesGenerated': '所有关键帧已生成！',
            'status.keyframesGenerated': '已生成 {completed}/{total} 个关键帧',
            'status.addWaypoints': '至少添加 {min} 个路径点',
            'status.uploadImagePath': '请上传图像（在相机路径选项卡中）或从单角度切换并加载图像',
            'status.loadingImage': '加载图像中...',
            'status.imageLoaded': '图像加载成功。Base64 大小：{size} KB',
            'status.imageGenerated': '图像生成成功！',
            'status.videoCreated': '视频创建成功！',
            'status.downloaded': '下载完成！',
            'status.downloadFailed': '下载失败',

            // 错误消息
            'error.noFile': '未提供文件',
            'error.invalidFileType': '无效的文件类型：{type}。允许：JPG、PNG、WebP、GIF',
            'error.invalidExtension': '无效的文件扩展名。允许：{extensions}',
            'error.fileTooLarge': '文件太大：{size}MB。最大：20MB',
            'error.noUrl': '未提供 URL',
            'error.invalidUrl': 'URL 必须以 http:// 或 https:// 开头',
            'error.urlMayNotBeImage': 'URL 可能不是图像',
            'error.networkError': '网络错误 - 请检查您的互联网连接',
            'error.invalidApiKey': 'API 密钥无效。请检查您的 fal.ai API 密钥。',
            'error.invalidRequest': '无效的请求格式。检查日志以获取详细信息。',
            'error.noImageInResponse': '响应中没有图像。检查日志以获取详细信息。',
            'error.failedToUploadImage': '上传图像失败',
            'error.noSegmentsGenerated': '未生成片段',
            'error.stitchingFailed': '拼接失败 - 显示片段',
            'error.need2Keyframes': '至少需要 2 个生成的关键帧',

            // 日志消息
            'log.uploadingImage': '上传图像：{name}（{size} KB，{type}）',
            'log.configuringClient': '配置 fal 客户端...',
            'log.model': '模型：{model}',
            'log.camera': '相机：horizontal_angle={azimuth}°，vertical_angle={elevation}°，zoom={distance}',
            'log.usingUrl': '使用提供的 URL：{url}',
            'log.uploadingToStorage': '上传图像到 fal 存储...',
            'log.imageUploaded': '图像已上传：{url}',
            'log.startingInference': '开始模型推理...',
            'log.input': '输入：{input}',
            'log.resultReceived': '收到结果！',
            'log.result': '结果：{result}',
            'log.dataKeys': '数据键：{keys}',
            'log.foundImageUrl': '找到：{path} = {url}',
            'log.success': '成功！图像 URL：{url}...',
            'log.error': '错误：{message}',
            'log.logsCleared': '日志已清除。',
            'log.addedWaypoint': '添加了路径点 {num}：Az={azimuth}°，El={elevation}°',
            'log.removedWaypoint': '删除了路径点 {num}',
            'log.imagePreviewLoaded': '图像预览加载成功',
            'log.imagePreviewFailed': '无法预览图像（CORS/网络问题），但 URL 已设置用于生成',
            'log.clearedWaypoints': '清除了所有路径点',
            'log.removedLastWaypoint': '删除了最后一个路径点',
            'log.generatingKeyframe': '生成关键帧 {current}/{total}：Az={azimuth}°，El={elevation}°',
            'log.keyframeDone': '关键帧 {num} 完成：{url}...',
            'log.keyframeFailed': '关键帧 {num} 失败：响应中没有图像',
            'log.keyframeError': '关键帧 {num} 错误：{error}',
            'log.syncedImageUrl': '从单角度选项卡同步了图像（URL）',
            'log.syncedImageFile': '从单角度选项卡同步了图像（上传文件）',
            'log.creatingZip': '创建 ZIP 文件...',
            'log.zipComplete': 'ZIP 下载完成',
            'log.zipError': 'ZIP 错误：{error}',
            'log.creatingVideo': '创建 {duration} 秒视频，{fps} fps，{style} 过渡',
            'log.renderingRealtime': '实时渲染（大约需要 {duration} 秒）...',
            'log.loadedKeyframes': '加载了 {count} 个关键帧图像',
            'log.videoComplete': '视频渲染完成',
            'log.videoDownloaded': '视频已下载',
            'log.generatingSegments': '生成 {count} 个 Seedance 片段（每个 {seconds} 秒 → 加速后 {target} 秒，{multiplier}x）',
            'log.prompt': '提示词："{prompt}"',
            'log.cacheHit': '缓存命中：重用 {count} 个 Seedance 片段（无需模型调用）。',
            'log.segment': '片段 {num}：帧 {start}（Az={azStart}°）→ 帧 {end}（Az={azEnd}°）',
            'log.segmentDone': '片段 {num} 完成！',
            'log.segmentFailed': '片段 {num}：响应中没有视频',
            'log.segmentError': '片段 {num} 失败：{error}',
            'log.savedCache': '已将 Seedance 片段保存到缓存。下次运行可以跳过队列。',
            'log.downloadingSegments': '下载 {count} 个片段进行拼接...',
            'log.downloadedSegment': '已下载片段 {num}',
            'log.stitchingSegment': '拼接片段 {current}/{total}：{duration} 秒，{speed}x 速度...',
            'log.finalVideo': '最终视频：约 {duration} 秒（{count} 个片段 × {perSegment} 秒）',

            // 进度消息
            'progress.downloadingSegments': '下载片段中...',
            'progress.stitching': '4x 加速拼接中...',
            'progress.segment': '片段 {current}/{total}',
            'progress.frame': '帧 {current}/{total}',
            'progress.queued': '片段 {current}/{total}（排队中）',
            'progress.rendering': '片段 {current}/{total}（渲染中）',

            // 视频完成
            'status.videoDone': '完成！{duration} 秒视频',
            'status.stitchFailed': '拼接失败 - 显示片段',

            // 路径点标签
            'waypoint.az': '方位',
            'waypoint.el': '仰角',
            'waypoint.zoom': '缩放',
            'waypoint.delete': '删除',

            // 画廊标签
            'gallery.keyframe': '关键帧',

            // 语言
            'lang.english': 'English',
            'lang.chinese': '简体中文'
        }
    },

    // Initialize i18n
    init() {
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('app_language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        }
        this.applyTranslations();
    },

    // Get translation
    t(key, params = {}) {
        let text = this.translations[this.currentLang][key] || key;

        // Replace parameters
        Object.keys(params).forEach(param => {
            text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
        });

        return text;
    },

    // Change language
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('app_language', lang);
            this.applyTranslations();

            // Refresh dynamic content
            if (typeof updateSliderValues === 'function') updateSliderValues();
            if (typeof updatePromptDisplay === 'function') updatePromptDisplay();
        }
    },

    // Apply translations to HTML
    applyTranslations() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);

            // Handle different element types
            if (el.tagName === 'TITLE') {
                el.textContent = translation;
                document.title = translation;
            } else {
                el.textContent = translation;
            }
        });

        // Update elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });

        // Update elements with data-i18n-title attribute
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });

        // Update language selector
        const langSelector = document.getElementById('lang-selector');
        if (langSelector) {
            langSelector.value = this.currentLang;
        }

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }
};

// Export for use in other files
if (typeof window !== 'undefined') {
    window.i18n = i18n;
}
