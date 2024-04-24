const Advertiser = require('./Advertiser');

describe('Advertiser', () => {
    test('campaign ends with both streams having balance of 0', () => {
        // Arrange
        const advertiser = new Advertiser(2000, 2000);

        // Act
        advertiser.runCampaign();

        // Assert
        expect(advertiser.streams.stream1).toBe(0);
        expect(advertiser.streams.stream2).toBe(0);
    });
});
