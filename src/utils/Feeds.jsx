export class Feeds {
    constructor(feeds) {
        this.feeds = feeds ? feeds.filter((feed) => feed.id.channelId || feed.id.videoId) : [];
        console.log(this.feeds);
    }
}
