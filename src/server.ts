import express from 'express';

export class Server {
  
  private app = express();

  async start() {
    console.log('server running');

    this.app.listen(3000, () => {
      console.log(`Server running on port ${3000}`);
    });

  }

}