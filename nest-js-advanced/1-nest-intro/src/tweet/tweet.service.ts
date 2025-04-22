import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class TweetService {
  constructor(private userService: UserService) {}
  tweets: { text: string; date: Date; user: number }[] = [
    {
      text: 'Hello 1',
      date: new Date('23-04-2025'),
      user: 1,
    },
    {
      text: 'Hello 2',
      date: new Date('22-04-2025'),
      user: 2,
    },
    {
      text: 'Hello 3',
      date: new Date('21-04-2025'),
      user: 3,
    },
  ];

  getTweets(userId: number) {
    const user = this.userService.getUserById("userId")
    const tweets = this.tweets.filter((t) => t.user === userId);
    // const response = tweets.map((t) => ({...t, username : user?.name}));
    return {}
  }
}
