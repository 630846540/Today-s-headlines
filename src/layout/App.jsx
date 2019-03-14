import React, {Component} from 'react';
import {Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from '@/pages/Home';
import Video from '@/pages/Video';
import Hot from '@/pages/Hot';
import Sociology from '@/pages/Sociology';
import Entertainment from '@/pages/Entertainment';
import Military from '@/pages/Military';
import Science from '@/pages/Science';
import Sports from '@/pages/Sports';
import Finance from '@/pages/Finance';
import International from '@/pages/International';
import Fashion from '@/pages/Fashion';


class App extends Component {

    dian () {
     window.history.go(-1);
    }
    ji(){
        window.history.go(1);
    }

    render() {
        return (
            <div className="box">
                <header className="header">
                    <img src={require('./images/xinjian.svg')} style={{ marginLeft:'0.3rem' }}/>
                    <h1>今日头条<img src={require('./images/refresh.svg')} className="shuaNew"/></h1>
                    <NavLink to='/search'><img src={require('./images/sousuo.svg')} style={{ marginRight:'0.3rem' }}/></NavLink>
                </header>
                <nav className ="nav">
                    <ul>
                    <NavLink to = "/home">推荐</NavLink>
                    <NavLink to = "/video">视频</NavLink>
                    <NavLink to = "/hot">热点</NavLink>
                    <NavLink to = "/sociology">社会</NavLink>
                    <NavLink to = "/entertainment">娱乐</NavLink>
                    <NavLink to = "/military">军事</NavLink>
                    <NavLink to = "/science">科技</NavLink>
                    <NavLink to = "/sports">体育</NavLink>
                    <NavLink to = "/finance">财经</NavLink>
                    <NavLink to = "/international">国际</NavLink>
                    <NavLink to = "/fashion">时尚</NavLink>
                    </ul>
                </nav>

                <Switch>
                    <Route path ="/Fashion" component= { Fashion } />
                    <Route path ="/International" component= { International } />
                    <Route path ="/Finance" component= { Finance } />
                    <Route path ="/Sports" component= { Sports } />
                    <Route path ="/Military" component= { Military } />
                    <Route path ="/Entertainment" component= { Entertainment } />
                    <Route path ="/Science" component= { Science } />
                    <Route path ="/sociology" component= { Sociology } />
                    <Route path ="/hot" component= { Hot } />
                    <Route path ="/video" component= { Video} />
                    <Route path="/home" component={Home}/>
                    <Redirect path="/" to="/Login"/>
                </Switch>
                {/*<footer className = "footer">*/}
                    {/*<img src={require('../layout/images/fanhui.svg')} className="fan" onClick={this.dian}/>*/}
                    {/*<NavLink to="/home"><img src={require('../layout/images/zhuye.svg')} className="zhu" /></NavLink>*/}
                    {/*<img src={require('../layout/images/fangxiangqianjin.svg')} className = "qian" onClick={this.ji}/>*/}
                {/*</footer>*/}

            </div>
        )
    }
}

export default App
