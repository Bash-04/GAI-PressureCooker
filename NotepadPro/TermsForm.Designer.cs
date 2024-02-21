namespace NotepadProInstaller
{
    partial class TermsForm
    {
        private System.ComponentModel.IContainer components = null;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            this.TermsTextBox = new System.Windows.Forms.TextBox();
            this.AgreeButton = new System.Windows.Forms.Button();
            this.DisagreeButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // TermsTextBox
            // 
            this.TermsTextBox.Location = new System.Drawing.Point(12, 12);
            this.TermsTextBox.Multiline = true;
            this.TermsTextBox.Name = "TermsTextBox";
            this.TermsTextBox.ReadOnly = true;
            this.TermsTextBox.Size = new System.Drawing.Size(260, 180);
            this.TermsTextBox.TabIndex = 0;
            this.TermsTextBox.Text = "Long terms text goes here. You agree to share all your data with us, including fil" +
    "es and webcam data. This is a fictional agreement for demonstration purposes.";
            // 
            // AgreeButton
            // 
            this.AgreeButton.Location = new System.Drawing.Point(116, 215);
            this.AgreeButton.Name = "AgreeButton";
            this.AgreeButton.Size = new System.Drawing.Size(75, 23);
            this.AgreeButton.TabIndex = 1;
            this.AgreeButton.Text = "Agree";
            this.AgreeButton.UseVisualStyleBackColor = true;
            this.AgreeButton.Click += new System.EventHandler(this.AgreeButton_Click);
            // 
            // DisagreeButton
            // 
            this.DisagreeButton.Location = new System.Drawing.Point(197, 215);
            this.DisagreeButton.Name = "DisagreeButton";
            this.DisagreeButton.Size = new System.Drawing.Size(75, 23);
            this.DisagreeButton.TabIndex = 2;
            this.DisagreeButton.Text = "Disagree";
            this.DisagreeButton.UseVisualStyleBackColor = true;
            this.DisagreeButton.Click += new System.EventHandler(this.DisagreeButton_Click);
            // 
            // TermsForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(284, 261);
            this.Controls.Add(this.DisagreeButton);
            this.Controls.Add(this.AgreeButton);
            this.Controls.Add(this.TermsTextBox);
            this.Name = "TermsForm";
            this.Text = "Terms and Conditions";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        private System.Windows.Forms.TextBox TermsTextBox;
        private System.Windows.Forms.Button AgreeButton;
        private System.Windows.Forms.Button DisagreeButton;
    }
}
