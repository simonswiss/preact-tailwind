import { Component } from "preact";

export default class App extends Component {
  render() {
    return (
      <div class="font-sans leading-normal">
        <div class="container max-w-md mx-auto m-8 p-8 rounded-lg shadow-md bg-grey-lightest">
          <h1 class="text-purple mb-3 font-black">Preact-cli + Tailwind!</h1>
          <div class="text-grey-darker">
            <p>
              You're all set with tailwind. Now go ahead and build something
              cool! 😍
            </p>
          </div>
        </div>
      </div>
    );
  }
}
