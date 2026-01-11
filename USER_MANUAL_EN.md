# Qwen Multi-Angle Camera Control - User Manual

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Single-Image Mode](#single-image-mode)
4. [Multi-Image Mode](#multi-image-mode)
5. [Camera Motion Mode](#camera-motion-mode)
6. [Tips and Best Practices](#tips-and-best-practices)
7. [Troubleshooting](#troubleshooting)

---

## Introduction

Qwen Multi-Angle Camera Control is a web application that uses AI to generate different camera angle views of your images. It leverages the Qwen Image Edit 2511 Multiple Angles model via the fal.ai API to create realistic viewpoint transformations.

### Key Features
- **3D Camera Control**: Interactive visualization with draggable controls
- **Multiple Modes**: Single image, multi-image keyframes, and video generation
- **AI-Powered**: Uses state-of-the-art Qwen and Seedance models
- **Bilingual Support**: English and Chinese interface
- **No Installation Required**: Runs entirely in your web browser

---

## Getting Started

### Prerequisites
1. A modern web browser (Chrome, Firefox, Safari, or Edge)
2. A fal.ai API key ([Get one here](https://fal.ai/dashboard/keys))
3. Internet connection

### Initial Setup

**[Screenshot suggestion: Show the header with API key input field highlighted]**

1. **Open the Application**
   - Open `index.html` in your web browser
   - Or access the deployed version at your hosting URL

2. **Enter Your API Key**
   - Locate the "fal.ai API Key" field in the top-right corner
   - Click "(Get key)" link if you don't have one
   - Enter your API key
   - Click the eye icon to show/hide the key
   - Your key is stored securely in browser local storage

3. **Select Language**
   - Click the language selector (🌐) in the top-right
   - Choose between English or 简体中文 (Simplified Chinese)

---

## Single-Image Mode

This mode generates a single image from a different camera angle.

**[Screenshot suggestion: Show the Single-Image tab with all three panels visible]**

### Step 1: Upload an Image

**[Screenshot suggestion: Show the upload zone with drag-and-drop action]**

You have two options:

**Option A: Upload a file**
1. Click on the "Input Image" upload zone
2. Select an image file (JPG, PNG, WebP, or GIF)
3. Or drag and drop an image directly onto the upload zone
4. Maximum file size: 20MB

**Option B: Use a URL**
1. Paste an image URL in the "or paste URL" field
2. Click the "Load" button
3. The image will be loaded for processing

**Tip**: Click the × button on the uploaded image to clear it and start over.

### Step 2: Adjust Camera Position

You can control the camera using two methods:

**[Screenshot suggestion: Show the 3D viewport with handles labeled]**

**Method A: 3D Interactive Control**
1. **Azimuth Handle** (Pink sphere): Drag to rotate camera horizontally
   - 0° = Front view
   - 90° = Right side
   - 180° = Back view
   - 270° = Left side

2. **Elevation Handle** (Cyan sphere): Drag to adjust vertical angle
   - -30° = Low angle (looking up)
   - 0° = Eye level
   - 90° = Bird's eye (looking down)

3. **Distance Handle** (Gold sphere): Drag to adjust zoom
   - 0 = Wide shot (far away)
   - 5 = Medium distance
   - 10 = Close-up

**[Screenshot suggestion: Show the slider controls panel]**

**Method B: Manual Sliders**
1. Use the sliders in "Manual Controls" section
2. Each slider shows the current value in real-time
3. Fine-tune values by clicking specific positions on the slider

### Step 3: Review API Parameters

**[Screenshot suggestion: Show the API Parameters panel]**

The "API Parameters" panel displays:
- `horizontal_angle`: Current azimuth in degrees
- `vertical_angle`: Current elevation in degrees
- `zoom`: Current distance value

These values are sent to the AI model for generation.

### Step 4: Generate the Image

**[Screenshot suggestion: Show the Generate button and output panel]**

1. Click the **"GENERATE"** button
2. Wait for the generation process (typically 5-15 seconds)
3. Watch the debug logs for progress updates
4. The generated image appears in the "Output" panel

### Step 5: Download Your Result

**[Screenshot suggestion: Show the download button below the output image]**

1. Once generation is complete, the "Download" button appears
2. Click it to save the image to your computer
3. Files are saved as `qwen-multiangle-[timestamp].png`

### Debug Logs

**[Screenshot suggestion: Show the expanded debug logs panel]**

The "🔧 Debug Logs" panel shows:
- Upload status
- API call details
- Model responses
- Error messages (if any)
- Click "Clear" to reset the logs

---

## Multi-Image Mode

This mode creates multiple camera angle keyframes along a custom path.

**[Screenshot suggestion: Show the Multi-Image tab with three-panel layout]**

### Step 1: Upload an Image

Same process as Single-Image mode:
- Upload a file or paste a URL
- **Auto-sync**: If you switch from Single-Image tab with an image loaded, it will automatically sync

### Step 2: Create Camera Path

**[Screenshot suggestion: Show the 3D sphere with waypoint markers]**

1. **Hover over the sphere** to preview camera position
2. **Scroll your mouse wheel** to adjust zoom level for the current position
   - The zoom value appears in the subtitle (e.g., "Zoom: 5.0")
3. **Click on the sphere** to add a waypoint (camera position)
4. Add 2-4 waypoints to create your camera path
5. A cyan line connects your waypoints showing the camera trajectory

**Path Controls**:
- **Clear All**: Remove all waypoints and start over
- **Undo**: Remove the last waypoint added

### Step 3: Review Waypoints

**[Screenshot suggestion: Show the waypoints list panel]**

The "Waypoints" panel displays:
- Waypoint number
- Azimuth, Elevation, and Zoom values
- Delete button (× icon) for individual waypoints
- Counter showing current/maximum waypoints (e.g., "2/4")

### Step 4: Generate Keyframes

**[Screenshot suggestion: Show the Generate All Keyframes button and progress bar]**

1. Click **"GENERATE ALL KEYFRAMES"** button
2. Watch the progress bar showing "X/Y" completion
3. Each waypoint is processed sequentially
4. Waypoints turn green when their image is generated
5. Generation time: ~5-15 seconds per keyframe

### Step 5: View and Download Keyframes

**[Screenshot suggestion: Show the generated keyframes gallery]**

**Gallery View**:
- Keyframes appear in the "Generated Keyframes" panel
- Hover over any keyframe to see:
  - Keyframe number label
  - Download button (appears on hover)

**Download Options**:
1. **Individual Download**: Click the download icon on any keyframe
2. **Download All as ZIP**: Click "Download All (ZIP)" button in the panel header
   - All keyframes are packaged into a single ZIP file
   - Files are named `keyframe-1.png`, `keyframe-2.png`, etc.

---

## Camera Motion Mode

This mode creates videos from your generated keyframes.

**[Screenshot suggestion: Show the Camera Motion tab]**

### Prerequisites

You must generate keyframes in Multi-Image mode first.

**Important Tip** (shown in the interface):
> "Generate keyframes first in Multi-image, then come here to create camera motion video."

### Choose Video Mode

**[Screenshot suggestion: Show the two mode buttons - Quick Stitch and AI Video]**

You have two options:

#### Option 1: Quick Stitch (Instant)

**Advantages**:
- Instant generation (no queue)
- Runs in your browser
- Customizable transitions

**[Screenshot suggestion: Show Quick Stitch settings panel]**

**Settings**:
1. **Total Duration**: 3-8 seconds
2. **Transition Style**:
   - Crane Zoom: Zoom in/out with panning
   - Smooth Pan: Slide between images
   - Whip Pan: Fast motion blur effect
   - Dolly Zoom: Opposite zoom directions
3. **Frame Rate**: 24 fps (Cinematic), 30 fps, or 60 fps (Smooth)
4. **Easing**: Ease In-Out, Ease Out, Linear, or Bounce

#### Option 2: AI Video (Seedance)

**Advantages**:
- AI-generated smooth transitions
- More natural camera movements
- Professional quality

**[Screenshot suggestion: Show AI Video settings panel]**

**Settings**:
1. **Motion Prompt**: Describe the camera movement
   - Default: "The camera very slowly and smoothly lowers on a boom..."
   - Customize for different effects
2. **Resolution**: 480p (Faster) or 720p
3. **Per-pair duration**: 1-3 seconds (after speedup)
4. **Loop Path**: Check to create a loop from last frame back to first

**Note**: AI Video uses queue-based processing, so generation may take several minutes depending on server load.

### Generate Video

**[Screenshot suggestion: Show the Create Video button and progress indicator]**

1. Click **"CREATE VIDEO"** button
2. For Quick Stitch:
   - Progress bar shows frame rendering
   - Takes approximately the video duration to render
3. For AI Video:
   - Shows queue status and rendering progress
   - May take several minutes per segment
   - Uses smart caching to avoid re-generating identical segments

### Preview and Download

**[Screenshot suggestion: Show the final video player with download button]**

1. Video appears in "Final Video" panel
2. Click to play/pause
3. Video loops automatically
4. Click **"Download Video"** button
   - Quick Stitch: Saves as `.webm` format
   - AI Video: Saves as `.mp4` format

---

## Tips and Best Practices

### Image Selection

**[Screenshot suggestion: Show examples of good vs. poor image choices]**

✅ **Good Images**:
- Clear subject with defined edges
- Good lighting
- Minimal background clutter
- Medium resolution (1024x1024 or higher)

❌ **Avoid**:
- Very small images (< 512x512)
- Extremely large files (> 20MB)
- Heavily compressed JPEGs
- Images with watermarks over the subject

### Camera Angles

**Best Results**:
- Moderate angle changes (30-90° rotations)
- Keep elevation between -30° and 60° for natural looks
- Use zoom 3-7 for most subjects
- Avoid extreme combinations (e.g., 90° elevation + 10 zoom)

### Multi-Image Paths

**Path Planning**:
- Start with 2-3 waypoints before trying 4
- Space waypoints evenly for smooth motion
- Avoid drastic jumps between waypoints
- Test each waypoint in Single-Image mode first

### Video Creation

**Quick Stitch**:
- Use 30 fps for most videos (good balance)
- Choose 24 fps for cinematic feel
- Use 60 fps only for smooth, slow-motion effects
- Crane Zoom works well for most subjects

**AI Video**:
- Write descriptive motion prompts for better results
- Start with 720p (480p if speed is critical)
- Use caching feature: Identical settings reuse previous renders
- Loop path creates seamless loops

### Performance

- Close unnecessary browser tabs
- Use Chrome or Edge for best performance
- Clear browser cache if experiencing issues
- Check debug logs for error details

---

## Troubleshooting

### Common Issues

**[Screenshot suggestion: Show the debug logs panel with an error message]**

#### Problem: "Please enter your fal.ai API key"
- **Solution**: Enter your API key in the top-right field
- Verify key is correct (no spaces or extra characters)

#### Problem: "Invalid API key" or 401 error
- **Solution**:
  1. Go to https://fal.ai/dashboard/keys
  2. Verify your key is active
  3. Generate a new key if needed
  4. Clear browser storage and re-enter

#### Problem: Image upload fails
- **Check**: File type is JPG, PNG, WebP, or GIF
- **Check**: File size is under 20MB
- **Try**: Use URL method instead

#### Problem: Generated image looks incorrect
- **Review**: Camera parameters in API Parameters panel
- **Try**: Different angle combinations
- **Check**: Original image quality
- **Note**: Model works best with well-lit, clear subjects

#### Problem: Video generation stuck
- **Quick Stitch**:
  - Check browser console for errors (F12)
  - Try shorter duration or lower FPS
- **AI Video**:
  - Check debug logs for queue status
  - Wait - server may be busy
  - Try again later if timeout occurs

#### Problem: Cannot preview URL image
- **Note**: This is often due to CORS restrictions
- **Don't worry**: Generation will still work
- **Alternative**: Download image and upload as file

#### Problem: Video download fails
- **Fallback**: Browser opens video in new tab
- **Manual save**: Right-click video → "Save video as..."

### Debug Logs Interpretation

**[Screenshot suggestion: Show different log entry types with colors]**

**Log Colors**:
- **Green (Info)**: Normal operations
- **Red (Error)**: Problems that stopped the process
- **Orange (Warn)**: Issues that may affect quality
- **Blue (Request)**: API calls being made
- **Pink (Response)**: Data received from API

**Common Log Messages**:
- `"Configuring fal client..."` - Starting API setup
- `"Uploading image to fal storage..."` - Sending image to server
- `"Starting model inference..."` - AI is processing
- `"Result received!"` - Generation complete
- `"Error: ..."` - Check the error details

### Getting Help

If you encounter persistent issues:

1. **Check Debug Logs**: Look for specific error messages
2. **Try Different Settings**: Simplify parameters
3. **Test with Different Image**: Verify it's not image-specific
4. **Browser Console**: Press F12 to see technical errors
5. **Report Issue**: Include:
   - Browser type and version
   - Error message from logs
   - Steps to reproduce
   - Screenshot of the issue

### Browser Compatibility

**Fully Supported**:
- Chrome 90+
- Edge 90+
- Firefox 88+
- Safari 14+

**Limited Support**:
- Older browsers may have issues with video recording
- Update to latest version for best results

---

## Keyboard Shortcuts

- **Ctrl/Cmd + Z**: Undo last waypoint (in Multi-Image mode)
- **Mouse Wheel**: Adjust zoom in path planning mode

---

## Privacy and Data

- **API Key**: Stored only in browser local storage (never sent to third parties)
- **Images**: Uploaded to fal.ai for processing (review their privacy policy)
- **Videos**: Generated client-side (Quick Stitch) or via Seedance API
- **No Account Required**: No registration or personal data collected

---

## Credits

- **Model**: Qwen Image Edit 2511 Multiple Angles by Alibaba/Qwen
- **API Provider**: [fal.ai](https://fal.ai/)
- **Video Generation**: Seedance 1.5 by ByteDance
- **Inspiration**: [multimodalart/qwen-image-multiple-angles-3d-camera](https://huggingface.co/spaces/multimodalart/qwen-image-multiple-angles-3d-camera) on Hugging Face

---

## License

MIT License - Free to use and modify

---

**Version**: 1.0
**Last Updated**: January 2026

For technical documentation, see README.md
