import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweets')
export class TweetController {
    constructor(private tweetService : TweetService){}

    @Get('{:userId}')
    // parseIntPipe converts string to number (in it is not convertable it will throw error)
    getUserTweets(@Param('userId', ParseIntPipe) userId : number ){
        return this.tweetService.getTweets(userId)
    }
}
