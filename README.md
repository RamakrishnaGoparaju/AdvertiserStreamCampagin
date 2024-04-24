## Problem statement
An existing system for ad booking is already in place. There is a known limitation whereby the
system supports only a single stream type per campaign booking. Examples of stream types are TV
Linear, Over-the-top Video on Demand, etc. Due to this limitation, if an advertiser would like to
invest X dollars of advertisement across multiple stream types, the sales agent that is helping to
input into the system would have to make a rough guess as to how much budget to allocate to each
stream type. For example, if the advertiser says they are willing to invest 100K dollars, the sales
agent may then input 50K for each of the 2 stream types. That would work fine if the impressions
were spread evenly across all stream types. However, this is not the case in the real world.
The sales agent would like the system to be improved such that when one side has reached close to
its last remaining 5%, the system must rebalance all stream types to have equal balance. However, if
both sides have reached its last 5%, no rebalancing shall happen.

## Algorithm

The above algorithm can be illustrated as follows:
1. Given stream 1 and stream 2 having 50K each.
2. Repeat
a. When randomly consuming between 2K and 5K on each stream that still has a
positive balance.
b. Then check the balance of both streams.
i. If both have balance of 0% or less, exit program.
ii. If both have balance of less than 5% OR have balance of 5% or more, do
nothing.
iii. If one of them have balance of less than 5%, rebalance both streams
to have equal balance.

## How to Run
 -- npm i
 -- node Advertiser.js 

## To Run Test case using following command
 --npm install --save-dev jest
 --jest or npx jest