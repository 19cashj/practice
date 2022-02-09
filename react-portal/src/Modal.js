import React from "react";
import reactDom from "react-dom";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null
    return reactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}

// To link to the portal in index.html you need to import createPortal from react dom. You return this method. The first argument is the code, and the second argument is the element in the html.
// Use portals when you have something like a modal or tooltip that always needs to stay on top of everything else. It preserves event delegation and parent/child relationships