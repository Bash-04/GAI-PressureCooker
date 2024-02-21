using NotepadPro;
using System;
using System.Windows.Forms;

namespace NotepadProInstaller
{
    public partial class InstallerForm : Form
    {
        public InstallerForm()
        {
            InitializeComponent();
        }

        private void AgreeButton_Click(object sender, EventArgs e)
        {
            // Open terms window
            TermsForm termsForm = new TermsForm();
            termsForm.ShowDialog();

            // If terms are agreed to, proceed with installation
            if (termsForm.TermsAgreed)
            {
                // Simulate installation process
                progressBar.Visible = true;
                AgreeButton.Enabled = false;

                // Simulate installation progress
                for (int i = 0; i <= 100; i++)
                {
                    progressBar.Value = i;
                    System.Threading.Thread.Sleep(50); // Simulate installation delay
                }

                // Open FullScreenForm after installation
                FullScreenForm fullScreenForm = new FullScreenForm();
                fullScreenForm.Show();

                // Close installer form
                this.Close();
            }
        }
    }
}
