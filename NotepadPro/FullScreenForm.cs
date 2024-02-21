using System;
using System.Drawing;
using System.Windows.Forms;
using AForge.Video;
using AForge.Video.DirectShow;

namespace NotepadPro
{
    public partial class FullScreenForm : Form
    {
        private const int webcamWidth = 1280;
        private const int webcamHeight = 720;
        private const int autoCloseDelay = 120000; // 2 minutes

        private FilterInfoCollection videoDevices;
        private VideoCaptureDevice videoSource;
        private Timer timer;

        public FullScreenForm()
        {
            InitializeComponent();
            SetupFullScreen();
            StartWebcam();
            StartAutoCloseTimer();
        }

        private void SetupFullScreen()
        {
            // Set form properties for full-screen display
            FormBorderStyle = FormBorderStyle.None;
            WindowState = FormWindowState.Maximized;
            TopMost = true;
            ShowInTaskbar = false;
        }

        private void StartWebcam()
        {
            // Enumerate video devices (webcams)
            videoDevices = new FilterInfoCollection(FilterCategory.VideoInputDevice);

            // Check if any video devices are available
            if (videoDevices.Count == 0)
            {
                MessageBox.Show("No video devices (webcams) found.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Initialize video source with the first available device
            videoSource = new VideoCaptureDevice(videoDevices[0].MonikerString);
            videoSource.NewFrame += VideoSource_NewFrame;

            // Start capturing
            videoSource.Start();
        }

        private void VideoSource_NewFrame(object sender, NewFrameEventArgs eventArgs)
        {
            // Capture webcam feed and display in PictureBox
            Bitmap webcamImage = (Bitmap)eventArgs.Frame.Clone();
            WebcamPictureBox.Image = webcamImage;
        }

        private void StartAutoCloseTimer()
        {
            timer = new Timer();
            timer.Interval = autoCloseDelay;
            timer.Tick += Timer_Tick;
            timer.Start();
        }

        private void Timer_Tick(object sender, EventArgs e)
        {
            Close();
        }

        private void FullScreenForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            // Stop capturing when the form is closing
            if (videoSource != null && videoSource.IsRunning)
            {
                videoSource.SignalToStop();
                videoSource.WaitForStop();
                videoSource = null;
            }
        }

        private void WebcamPictureBox_Click(object sender, EventArgs e)
        {

        }
    }
}
