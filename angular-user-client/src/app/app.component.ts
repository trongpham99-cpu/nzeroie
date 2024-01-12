import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-user-client';
  @ViewChild('paintCanvas', { static: true }) paintCanvas!: ElementRef<HTMLCanvasElement>;
  context!: CanvasRenderingContext2D;

  x = 0;
  y = 0;
  isMouseDown = false;
  lineWidth = 1;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.context = this.paintCanvas.nativeElement.getContext('2d')!;
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#000'; // default color
  }

  onColorChange(event: Event): void {
    this.context.strokeStyle = (event.target as HTMLInputElement).value;
  }

  onLineWidthChange(event: Event): void {
    this.lineWidth = +(event.target as HTMLInputElement).value;
    this.context.lineWidth = this.lineWidth;
  }

  stopDrawing(): void {
    this.isMouseDown = false;
  }

  startDrawing(event: MouseEvent): void {
    this.isMouseDown = true;
    [this.x, this.y] = [event.offsetX, event.offsetY];
  }

  drawLine(event: MouseEvent): void {
    if (this.isMouseDown) {
      const newX = event.offsetX;
      const newY = event.offsetY;
      this.context.beginPath();
      this.context.moveTo(this.x, this.y);
      this.context.lineTo(newX, newY);
      this.context.stroke();
      this.x = newX;
      this.y = newY;
    }
  }

  saveCanvas(): void {
    const image = this.paintCanvas.nativeElement.toDataURL('image/png');

    //add white background
    const canvas = document.createElement('canvas');
    canvas.width = this.paintCanvas.nativeElement.width;
    canvas.height = this.paintCanvas.nativeElement.height;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.paintCanvas.nativeElement, 0, 0);
    const image2 = canvas.toDataURL('image/png');

    //download image
    const link = document.createElement('a');
    link.href = image2;
    link.download = 'image.png';

    //click link
    link.click();
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, this.paintCanvas.nativeElement.width, this.paintCanvas.nativeElement.height);
  }

}
