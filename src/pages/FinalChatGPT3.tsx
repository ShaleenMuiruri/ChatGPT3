import { FunctionComponent } from "react";
import styled from "styled-components";

const SvgIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const NewChat1 = styled.div`
  position: relative;
  line-height: 16.5px;
`;
const SvgParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const NewChat = styled.div`
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
  padding: 14.5px 144px 14.5px 13px;
  align-items: center;
  justify-content: flex-start;
`;
const FrameIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
`;
const Svg = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const CreateUserFlow = styled.div`
  position: relative;
  line-height: 20px;
`;
const Div2 = styled.div`
  position: relative;
  background: linear-gradient(270deg, #202123, rgba(32, 33, 35, 0));
  width: 32px;
  height: 20px;
`;
const Div1 = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 57px;
`;
const A = styled.div`
  border-radius: 6px;
  width: 244px;
  display: flex;
  flex-direction: row;
  padding: 12px;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const Div3 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 57px;
`;
const A1 = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 12px;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 462px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;
const Chattitles = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: #ececf1;
`;
const ClearConversations = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 13.5px 80px 13.5px 12px;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const DarkMode = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 13.5px 136px 13.5px 12px;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const OpenaiDiscord = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 13.5px 107px 13.5px 12px;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const UpdatesFaq = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 13.5px 111px 13.5px 12px;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const LogOut = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 13.5px 156px 13.5px 12px;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const ClearConversationsParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const Navigation1 = styled.div`
  align-self: stretch;
  background-color: #202123;
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Chatgpt = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 40px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex-shrink: 0;
`;
const FrameIcon3 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const Svg3 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Limitations = styled.div`
  position: relative;
  line-height: 21.5px;
`;
const H2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0px 1px;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
const ExplainQuantumComputing = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 6px;
  background-color: #f7f7f8;
  display: flex;
  flex-direction: column;
  padding: 14px 15px;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Button1 = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: 6px;
  background-color: #f7f7f8;
  display: flex;
  flex-direction: row;
  padding: 14px 15px;
  align-items: center;
  justify-content: center;
`;
const Ul = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  font-size: 14px;
`;
const Examples = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 19px;
`;
const SvgIcon6 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Button7 = styled.div`
  align-self: stretch;
  border-radius: 6px;
  background-color: #f7f7f8;
  display: flex;
  flex-direction: row;
  padding: 19px 15px;
  align-items: center;
  justify-content: center;
`;
const Capabilities2 = styled.div`
  flex: 1;
  height: 292.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 19px;
`;
const Sections = styled.div`
  align-self: stretch;
  height: 295px;
  display: flex;
  flex-direction: row;
  padding: 0px 0.0078125px 0px 0px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
  font-size: 17px;
`;
const Content1 = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 26px 0px;
  align-items: center;
  justify-content: center;
  gap: 77px;
`;
const ContentWrapper = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 75px;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Content = styled.div`
  align-self: stretch;
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 136px 0px 192px;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SvgChild = styled.img`
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 13px;
`;
const Svg6 = styled.div`
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Field = styled.div`
  flex: 1;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  height: 49px;
  display: flex;
  flex-direction: row;
  padding: 18px 16px;
  align-items: flex-start;
  justify-content: center;
`;
const Prompt1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 8px 75px 0px;
  align-items: center;
  justify-content: center;
`;
const ChatgptJan9 = styled.span`
  text-decoration: underline;
`;
const ChatgptJan9Container1 = styled.span`
  line-break: anywhere;
`;
const ChatgptJan9Container = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: 16px;
  display: flex;
  align-items: center;
`;
const ChatgptJan9VersionFreeReWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0px 30px;
  align-items: center;
  justify-content: flex-start;
`;
const Footer = styled.div`
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;
const Chatmain = styled.div`
  flex: 1;
  height: 927px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: 36px;
  color: #343541;
`;
const Finalchatgpt3Root = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: 14px;
  color: #fff;
  font-family: Roboto;
`;
const FinalChatGPT3: FunctionComponent = () => {
  return (
    <Finalchatgpt3Root>
      <Navigation1>
        <NewChat>
          <SvgParent>
            <SvgIcon alt="" src="/svg.svg" />
            <NewChat1>New chat</NewChat1>
          </SvgParent>
        </NewChat>
        <Chattitles>
          <Div>
            <A>
              <Svg>
                <FrameIcon alt="" src="/frame.svg" />
              </Svg>
              <Div1>
                <CreateUserFlow>Create User flow</CreateUserFlow>
                <Div2 />
              </Div1>
            </A>
            <A1>
              <Svg>
                <FrameIcon alt="" src="/frame.svg" />
              </Svg>
              <Div3>
                <CreateUserFlow>Create User flow</CreateUserFlow>
                <Div2 />
              </Div3>
            </A1>
            <A1>
              <Svg>
                <FrameIcon alt="" src="/frame.svg" />
              </Svg>
              <Div3>
                <CreateUserFlow>Create User flow</CreateUserFlow>
                <Div2 />
              </Div3>
            </A1>
          </Div>
        </Chattitles>
        <ClearConversationsParent>
          <ClearConversations>
            <SvgIcon alt="" src="/svg1.svg" />
            <NewChat1>Clear conversations</NewChat1>
          </ClearConversations>
          <DarkMode>
            <SvgIcon alt="" src="/svg2.svg" />
            <NewChat1>Dark mode</NewChat1>
          </DarkMode>
          <OpenaiDiscord>
            <SvgIcon alt="" src="/svg3.svg" />
            <NewChat1>OpenAI Discord</NewChat1>
          </OpenaiDiscord>
          <UpdatesFaq>
            <SvgIcon alt="" src="/svg4.svg" />
            <NewChat1>{`Updates & FAQ`}</NewChat1>
          </UpdatesFaq>
          <LogOut>
            <SvgIcon alt="" src="/svg5.svg" />
            <NewChat1>Log out</NewChat1>
          </LogOut>
        </ClearConversationsParent>
      </Navigation1>
      <Chatmain>
        <Content>
          <ContentWrapper>
            <Content1>
              <Chatgpt>ChatGPT</Chatgpt>
              <Sections>
                <Examples>
                  <H2>
                    <Svg3>
                      <FrameIcon3 alt="" src="/frame1.svg" />
                    </Svg3>
                    <Limitations>Examples</Limitations>
                  </H2>
                  <Ul>
                    <Button>
                      <ExplainQuantumComputing>
                        "Explain quantum computing in simple terms" →
                      </ExplainQuantumComputing>
                    </Button>
                    <Button1>
                      <ExplainQuantumComputing>
                        "Got any creative ideas for a 10 year old’s birthday?" →
                      </ExplainQuantumComputing>
                    </Button1>
                    <Button1>
                      <ExplainQuantumComputing>
                        "How do I make an HTTP request in Javascript?" →
                      </ExplainQuantumComputing>
                    </Button1>
                  </Ul>
                </Examples>
                <Examples>
                  <H2>
                    <Svg3>
                      <FrameIcon3 alt="" src="/frame2.svg" />
                    </Svg3>
                    <Limitations>Capabilities</Limitations>
                  </H2>
                  <Ul>
                    <Button>
                      <ExplainQuantumComputing>
                        Remembers what user said earlier in the conversation
                      </ExplainQuantumComputing>
                    </Button>
                    <Button1>
                      <ExplainQuantumComputing>
                        Allows user to provide follow-up corrections
                      </ExplainQuantumComputing>
                    </Button1>
                    <Button1>
                      <ExplainQuantumComputing>
                        Trained to decline inappropriate requests
                      </ExplainQuantumComputing>
                    </Button1>
                  </Ul>
                </Examples>
                <Capabilities2>
                  <H2>
                    <Svg3>
                      <SvgIcon6 alt="" src="/svg6.svg" />
                    </Svg3>
                    <Limitations>Limitations</Limitations>
                  </H2>
                  <Ul>
                    <Button>
                      <ExplainQuantumComputing>
                        May occasionally generate incorrect information
                      </ExplainQuantumComputing>
                    </Button>
                    <Button7>
                      <ExplainQuantumComputing>
                        May occasionally produce harmful instructions or biased
                        content
                      </ExplainQuantumComputing>
                    </Button7>
                    <Button1>
                      <ExplainQuantumComputing>
                        Limited knowledge of world and events after 2021
                      </ExplainQuantumComputing>
                    </Button1>
                  </Ul>
                </Capabilities2>
              </Sections>
            </Content1>
          </ContentWrapper>
        </Content>
        <Footer>
          <Prompt1>
            <Field>
              <Svg6>
                <SvgChild alt="" src="/group-8013.svg" />
              </Svg6>
            </Field>
          </Prompt1>
          <ChatgptJan9VersionFreeReWrapper>
            <ChatgptJan9Container>
              <ChatgptJan9Container1>
                <ChatgptJan9>ChatGPT Jan 9 Version</ChatgptJan9>. Free Research
                Preview. Our goal is to make AI systems more natural and safe to
                interact with. Your feedback will help us improve.
              </ChatgptJan9Container1>
            </ChatgptJan9Container>
          </ChatgptJan9VersionFreeReWrapper>
        </Footer>
      </Chatmain>
    </Finalchatgpt3Root>
  );
};

export default FinalChatGPT3;
