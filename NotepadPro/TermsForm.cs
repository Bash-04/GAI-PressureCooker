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
            this.DialogResult = DialogResult.OK;
            this.Close();
        }

        private void DisagreeButton_Click(object sender, EventArgs e)
        {
            TermsAgreed = false;
            this.DialogResult = DialogResult.Cancel;
            this.Close();
        }
    }
}
