import { AppState } from "../AppState";

class MessageService {
  async changeMessage() {
    if (AppState.message == "hello") {
      AppState.message = "hi";
      return;
    }
    AppState.message = "hello";
  }
}
export const messageService = new MessageService();
