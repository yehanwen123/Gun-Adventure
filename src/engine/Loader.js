export class Loader {
    constructor() {
        this.images = {};
        this.totalResources = 0;
        this.loadedResources = 0;
    }

    loadImage(key, src) {
        this.totalResources++;
        const img = new Image();
        img.src = src;
        img.onload = () => {
            this.loadedResources++;
            console.log(`Loaded: ${key}`);
        };
        this.images[key] = img;
    }

    isDone() {
        return this.loadedResources === this.totalResources;
    }
}
