import { FunctionComponent } from "react";
import "./FinalChatGPT3.css";
const FinalChatGPT3: FunctionComponent = () => {
  return (
    <div className="finalchatgpt3">
      <div className="navigation">
        <div className="new-chat">
          <div className="svg-parent">
            <img className="svg-icon" alt="" src="/svg.svg" />
            <div className="new-chat1">New chat</div>
          </div>
        </div>
        <div className="chattitles">
          <div className="div">
            <div className="a">
              <div className="svg">
                <img className="frame-icon" alt="" src="/frame.svg" />
              </div>
              <div className="div1">
                <div className="create-user-flow">Create User flow</div>
                <div className="div2" />
              </div>
            </div>
            <div className="a1">
              <div className="svg">
                <img className="frame-icon" alt="" src="/frame.svg" />
              </div>
              <div className="div3">
                <div className="create-user-flow">Create User flow</div>
                <div className="div2" />
              </div>
            </div>
            <div className="a1">
              <div className="svg">
                <img className="frame-icon" alt="" src="/frame.svg" />
              </div>
              <div className="div3">
                <div className="create-user-flow">Create User flow</div>
                <div className="div2" />
              </div>
            </div>
          </div>
        </div>
        <div className="clear-conversations-parent">
          <div className="clear-conversations">
            <img className="svg-icon" alt="" src="/svg1.svg" />
            <div className="new-chat1">Clear conversations</div>
          </div>
          <div className="dark-mode">
            <img className="svg-icon" alt="" src="/svg2.svg" />
            <div className="new-chat1">Dark mode</div>
          </div>
          <div className="openai-discord">
            <img className="svg-icon" alt="" src="/svg3.svg" />
            <div className="new-chat1">OpenAI Discord</div>
          </div>
          <div className="updates-faq">
            <img className="svg-icon" alt="" src="/svg4.svg" />
            <div className="new-chat1">{`Updates & FAQ`}</div>
          </div>
          <div className="log-out">
            <img className="svg-icon" alt="" src="/svg5.svg" />
            <div className="new-chat1">Log out</div>
          </div>
        </div>
      </div>
      <div className="chatmain">
        <div className="content">
          <div className="content-wrapper">
            <div className="content1">
              <div className="chatgpt">ChatGPT</div>
              <div className="sections">
                <div className="examples">
                  <div className="h2">
                    <div className="svg3">
                      <img className="frame-icon3" alt="" src="/frame1.svg" />
                    </div>
                    <div className="limitations">Examples</div>
                  </div>
                  <div className="ul">
                    <div className="button">
                      <div className="explain-quantum-computing">
                        "Explain quantum computing in simple terms" →
                      </div>
                    </div>
                    <div className="button1">
                      <div className="explain-quantum-computing">
                        "Got any creative ideas for a 10 year old’s birthday?" →
                      </div>
                    </div>
                    <div className="button1">
                      <div className="explain-quantum-computing">
                        "How do I make an HTTP request in Javascript?" →
                      </div>
                    </div>
                  </div>
                </div>
                <div className="examples">
                  <div className="h2">
                    <div className="svg3">
                      <img className="frame-icon3" alt="" src="/frame2.svg" />
                    </div>
                    <div className="limitations">Capabilities</div>
                  </div>
                  <div className="ul">
                    <div className="button">
                      <div className="explain-quantum-computing">
                        Remembers what user said earlier in the conversation
                      </div>
                    </div>
                    <div className="button1">
                      <div className="explain-quantum-computing">
                        Allows user to provide follow-up corrections
                      </div>
                    </div>
                    <div className="button1">
                      <div className="explain-quantum-computing">
                        Trained to decline inappropriate requests
                      </div>
                    </div>
                  </div>
                </div>
                <div className="capabilities2">
                  <div className="h2">
                    <div className="svg3">
                      <img className="svg-icon6" alt="" src="/svg6.svg" />
                    </div>
                    <div className="limitations">Limitations</div>
                  </div>
                  <div className="ul">
                    <div className="button">
                      <div className="explain-quantum-computing">
                        May occasionally generate incorrect information
                      </div>
                    </div>
                    <div className="button7">
                      <div className="explain-quantum-computing">
                        May occasionally produce harmful instructions or biased
                        content
                      </div>
                    </div>
                    <div className="button1">
                      <div className="explain-quantum-computing">
                        Limited knowledge of world and events after 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="prompt">
            <div className="field">
              <div className="svg6">
                <img className="svg-child" alt="" src="/group-8013.svg" />
              </div>
            </div>
          </div>
          <div className="chatgpt-jan-9-version-free-re-wrapper">
            <div className="chatgpt-jan-9-container">
              <span className="chatgpt-jan-9-container1">
                <span className="chatgpt-jan-9">ChatGPT Jan 9 Version</span>.
                Free Research Preview. Our goal is to make AI systems more
                natural and safe to interact with. Your feedback will help us
                improve.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalChatGPT3;
