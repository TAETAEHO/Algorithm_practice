{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network

  // function printLoginState(state: ResourceLoadState) {
  //   if (state.state === "loading") {
  //     console.log(state.state);
  //   } else if (state.state === "success") {
  //     console.log(state.response.body);
  //   } else {
  //     console.log(state.reason);
  //   }
  // }

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log("loading...");
        break;
      case "success":
        console.log("loaded");
        break;
      case "fail":
        console.log("no network");
        break;
      default:
        throw Error("unknown state");
    }
  }
}
