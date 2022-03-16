import { Component, ComponentRef, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.scss']
})
export class ComponentViewerComponent {
    @ViewChild('dynamic', { read: ViewContainerRef })
    private viewRef: ViewContainerRef;

    @Input() dynamicComponents: Type<ComponentRef<any>>[];
  
    drawComponents(): void {
      this.viewRef.clear();
      this.dynamicComponents.forEach(c => {
        this.viewRef.createComponent(c);
      })
    }
}
