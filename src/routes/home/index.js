import { Layout } from "antd";
import {connect} from 'dva'
const { Header, Footer, Sider, Content } = Layout;

const Home = (props) => {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default connect(({ login }) => ({
  login,
}))(Home);
