using System;
using System.Windows.Forms;

namespace NotepadPro
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
            StartTimer();
        }

        private void StartTimer()
        {
            // Start a timer to close Notepad Pro after 2 minutes
            Timer timer = new Timer();
            timer.Interval = 120000; // 2 minutes
            timer.Tick += Timer_Tick;
            timer.Start();
        }

        private void Timer_Tick(object sender, EventArgs e)
        {
            // Close Notepad Pro
            this.Close();

            // Open full-screen window with warning message
            FullScreenForm fullScreenForm = new FullScreenForm();
            fullScreenForm.ShowDialog();
        }
    }
}
