import { EventBus } from 'quasar';

class EventBusWrapper {
    private eventBus: EventBus;
    private eventRegistry: Map<string, number>;

    constructor() {
        this.eventBus = new EventBus();
        this.eventRegistry = new Map();
    }

    on(eventName: string, callback: (...args: any[]) => void): void {
        if (this.eventRegistry.has(eventName)) {
            console.warn(
                `Event "${eventName}" is already registered. Consider using a unique name.`
            );
        }
        this.eventRegistry.set(
            eventName,
            (this.eventRegistry.get(eventName) || 0) + 1
        );
        this.eventBus.on(eventName, callback);
    }

    once(eventName: string, callback: (...args: any[]) => void): void {
        if (this.eventRegistry.has(eventName)) {
            console.warn(
                `Event "${eventName}" is already registered. Consider using a unique name.`
            );
        }
        this.eventRegistry.set(
            eventName,
            (this.eventRegistry.get(eventName) || 0) + 1
        );
        this.eventBus.once(eventName, (...args: any[]) => {
            callback(...args);
            this.decrementEventCount(eventName);
        });
    }

    emit(eventName: string, ...args: any[]): void {
        if (!this.eventRegistry.has(eventName)) {
            console.warn(
                `Event "${eventName}" is not registered. Make sure to register it first.`
            );
        }
        this.eventBus.emit(eventName, ...args);
    }

    off(eventName: string, callback: (...args: any[]) => void): void {
        this.eventBus.off(eventName, callback);
        this.decrementEventCount(eventName);
    }

    private decrementEventCount(eventName: string): void {
        const count = this.eventRegistry.get(eventName);
        if (count && count > 1) {
            this.eventRegistry.set(eventName, count - 1);
        } else {
            this.eventRegistry.delete(eventName);
        }
    }
}

export const bus = new EventBusWrapper();
