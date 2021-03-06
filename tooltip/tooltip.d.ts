import { ElementRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Overlay } from '@angular2-material/core/overlay/overlay';
export declare type TooltipPosition = 'before' | 'after' | 'above' | 'below';
export declare class MdTooltip {
    private _overlay;
    private _elementRef;
    private _viewContainerRef;
    private _changeDetectionRef;
    visible: boolean;
    /** Allows the user to define the position of the tooltip relative to the parent element */
    private _position;
    position: TooltipPosition;
    /** The message to be displayed in the tooltip */
    private _message;
    message: string;
    private _overlayRef;
    constructor(_overlay: Overlay, _elementRef: ElementRef, _viewContainerRef: ViewContainerRef, _changeDetectionRef: ChangeDetectorRef);
    /**
     * Create the overlay config and position strategy
     */
    private _createOverlay();
    /**
     * Returns the origin position based on the user's position preference
     */
    private _getOrigin();
    /**
     * Returns the overlay position based on the user's preference
     */
    private _getOverlayPosition();
    /**
     * Shows the tooltip on mouse enter
     * @param event
     */
    _handleMouseEnter(event: MouseEvent): void;
    /**
     * Hides the tooltip on mouse leave
     * @param event
     */
    _handleMouseLeave(event: MouseEvent): void;
    /**
     * Shows the tooltip and returns a promise that will resolve when the tooltip is visible
     */
    show(): Promise<any>;
    /**
     * Hides the tooltip and returns a promise that will resolve when the tooltip is hidden
     */
    hide(): Promise<any>;
    /**
     * Shows/hides the tooltip and returns a promise that will resolve when it is done
     */
    toggle(): Promise<any>;
    /**
     * Updates the tooltip's position
     */
    private _updatePosition();
}
export declare const MD_TOOLTIP_DIRECTIVES: typeof MdTooltip[];
