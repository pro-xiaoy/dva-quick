import { Layout } from "antd";
import {connect} from 'dva';
import './index.less';
const { Header, Footer, Sider, Content } = Layout;
const Home = (props) => {
  return (
    <>
      <div className="layout">
        <div className="header">
          
        </div>
        <div className="content">32131</div>
      </div>
    </>
  );
};

export default connect(({ login }) => ({
  login,
}))(Home);
