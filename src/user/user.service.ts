import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public listUsers(): { name: string; id: number }[] {
    return [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
    ];
  }
}
