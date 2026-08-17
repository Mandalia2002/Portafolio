import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {

  downloadCV(): void {
    const anchor = document.createElement('a');
    anchor.href = '/'; 
    anchor.download = 'Curriculum.pdf';   
    
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}
