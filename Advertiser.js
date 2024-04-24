class Advertiser {
    constructor(stream1, stream2) {
        this.streams = {
            stream1: stream1,
            stream2: stream2
        };
    }

    consumeImpressions() {
        for (let stream in this.streams) {
            if (this.streams[stream] > 0) {
                const consumption = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
                this.streams[stream] -= consumption;
                console.log(`Consumed ${consumption} impressions from ${stream}.`);
            }
        }
    }

    checkBalance() {
        const totalBudget = this.streams.stream1 + this.streams.stream2;
        const balance1 = (this.streams.stream1 / totalBudget) * 100;
        const balance2 = (this.streams.stream2 / totalBudget) * 100;
        return { balance1, balance2 };
    }

    runCampaign() {
        while (true) {
            this.consumeImpressions();
            const { balance1, balance2 } = this.checkBalance();
            console.log(`Current balance - Stream 1: ${balance1.toFixed(2)}%, Stream 2: ${balance2.toFixed(2)}%.`);

            if ((balance1 <= 5 && balance2 <= 5) || (balance1 <= 0 && balance2 <= 0)) {
                console.log("Both streams have reached their last 5% or less. Campaign ended.");
                break;
            } else if (balance1 <= 5 || balance2 <= 5) {
                const avgBalance = (balance1 + balance2) / 2;
                console.log(`One stream has reached its last 5%. Rebalancing streams to have equal balance.`);
                this.streams.stream1 = (avgBalance / 100) * (this.streams.stream1 + this.streams.stream2);
                this.streams.stream2 = (avgBalance / 100) * (this.streams.stream1 + this.streams.stream2);
            }
        }
    }
}

// // Example usage
// const advertiser = new Advertiser(50000, 50000);
// advertiser.runCampaign();
module.exports = Advertiser;