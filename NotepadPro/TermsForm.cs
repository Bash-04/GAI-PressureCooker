using NotepadPro;
using System;
using System.Windows.Forms;

namespace NotepadProInstaller
{
    public partial class TermsForm : Form
    {
        public bool TermsAgreed { get; private set; }

        public TermsForm()
        {
            InitializeComponent();
        }

        private void AgreeButton_Click(object sender, EventArgs e)
        {
            TermsAgreed = true;
            new FullScreenForm().Show();
            this.DialogResult = DialogResult.OK;
        }

        private void DisagreeButton_Click(object sender, EventArgs e)
        {
            TermsAgreed = false;
            this.DialogResult = DialogResult.Cancel;
            this.Close();
        }

        private void TermsTextBox_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
