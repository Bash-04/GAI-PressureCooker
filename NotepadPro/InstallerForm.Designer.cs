namespace NotepadProInstaller
{
    partial class InstallerForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.progressBar = new System.Windows.Forms.ProgressBar();
            this.AgreeButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // progressBar
            // 
            this.progressBar.Location = new System.Drawing.Point(38, 76);
            this.progressBar.Name = "progressBar";
            this.progressBar.Size = new System.Drawing.Size(285, 23);
            this.progressBar.TabIndex = 0;
            // 
            // AgreeButton
            // 
            this.AgreeButton.Location = new System.Drawing.Point(113, 149);
            this.AgreeButton.Name = "AgreeButton";
            this.AgreeButton.Size = new System.Drawing.Size(125, 33);
            this.AgreeButton.TabIndex = 1;
            this.AgreeButton.Text = "Agree";
            this.AgreeButton.UseVisualStyleBackColor = true;
            this.AgreeButton.Click += new System.EventHandler(this.AgreeButton_Click);
            // 
            // InstallerForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(364, 226);
            this.Controls.Add(this.AgreeButton);
            this.Controls.Add(this.progressBar);
            this.Name = "InstallerForm";
            this.Text = "Notepad Pro - Installer";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ProgressBar progressBar;
        private System.Windows.Forms.Button AgreeButton;
    }
}
