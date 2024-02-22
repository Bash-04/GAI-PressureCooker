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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(TermsForm));
            this.TermsTextBox = new System.Windows.Forms.TextBox();
            this.AgreeButton = new System.Windows.Forms.Button();
            this.DisagreeButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // TermsTextBox
            // 
            this.TermsTextBox.Location = new System.Drawing.Point(16, 15);
            this.TermsTextBox.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.TermsTextBox.Multiline = true;
            this.TermsTextBox.Name = "TermsTextBox";
            this.TermsTextBox.ReadOnly = true;
            this.TermsTextBox.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.TermsTextBox.Size = new System.Drawing.Size(345, 221);
            this.TermsTextBox.TabIndex = 0;
            this.TermsTextBox.Text = resources.GetString("TermsTextBox.Text");
            this.TermsTextBox.TextChanged += new System.EventHandler(this.TermsTextBox_TextChanged);
            // 
            // AgreeButton
            // 
            this.AgreeButton.Location = new System.Drawing.Point(155, 265);
            this.AgreeButton.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.AgreeButton.Name = "AgreeButton";
            this.AgreeButton.Size = new System.Drawing.Size(100, 28);
            this.AgreeButton.TabIndex = 1;
            this.AgreeButton.Text = "Agree";
            this.AgreeButton.UseVisualStyleBackColor = true;
            this.AgreeButton.Click += new System.EventHandler(this.AgreeButton_Click);
            // 
            // DisagreeButton
            // 
            this.DisagreeButton.Location = new System.Drawing.Point(263, 265);
            this.DisagreeButton.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.DisagreeButton.Name = "DisagreeButton";
            this.DisagreeButton.Size = new System.Drawing.Size(100, 28);
            this.DisagreeButton.TabIndex = 2;
            this.DisagreeButton.Text = "Disagree";
            this.DisagreeButton.UseVisualStyleBackColor = true;
            this.DisagreeButton.Click += new System.EventHandler(this.DisagreeButton_Click);
            // 
            // TermsForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(379, 321);
            this.Controls.Add(this.DisagreeButton);
            this.Controls.Add(this.AgreeButton);
            this.Controls.Add(this.TermsTextBox);
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
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
