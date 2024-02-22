namespace NotepadPro
{
    partial class FullScreenForm
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
            this.WebcamPictureBox = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.WebcamPictureBox)).BeginInit();
            this.SuspendLayout();
            // 
            // WebcamPictureBox
            // 
            this.WebcamPictureBox.Dock = System.Windows.Forms.DockStyle.Fill;
            this.WebcamPictureBox.Location = new System.Drawing.Point(0, 0);
            this.WebcamPictureBox.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.WebcamPictureBox.Name = "WebcamPictureBox";
            this.WebcamPictureBox.Size = new System.Drawing.Size(1067, 554);
            this.WebcamPictureBox.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.WebcamPictureBox.TabIndex = 0;
            this.WebcamPictureBox.TabStop = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Calibri", 20F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(16, 11);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(742, 41);
            this.label1.TabIndex = 1;
            this.label1.Text = "This is what you agreed to share with Notepad Pro!";
            // 
            // FullScreenForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1067, 554);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.WebcamPictureBox);
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "FullScreenForm";
            this.Text = "Notepad Pro - Full Screen";
            ((System.ComponentModel.ISupportInitialize)(this.WebcamPictureBox)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }


        #endregion

        private System.Windows.Forms.PictureBox WebcamPictureBox;
        private System.Windows.Forms.Label label1;
    }
}
