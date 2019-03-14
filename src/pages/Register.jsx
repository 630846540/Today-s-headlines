import React, {Component} from 'react'
import {InputItem, Toast, Button} from 'antd-mobile';
import {NavLink} from 'react-router-dom';
import api from '@/api/register'
import './register1.scss'

class Com extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            value: '',
            hasPasswordError: false,
            passwordvalue: ''
        }
    }

    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('请输入正确格式的手机号码');
        }
    }

    onPasswordErrorClick() {
        if (this.state.hasPasswordError) {
            Toast.info('请输入正确格式的密码');
        }
    }

    onChange(value) {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value: value.replace(/\s/g, ''),
        });
        console.log(this.state.value)
    }

    onPasswordChange(passwordvalue) {
        if (passwordvalue.replace(/\s/g, '').length < 4) {
            this.setState({
                hasPasswordError: true,
            });
        } else {
            this.setState({
                hasPasswordError: false,
            });
        }
        this.setState({
            passwordvalue,
        });
        console.log(this.state.passwordvalue)
    }

    loginFn(phone, password) {
        console.log(phone, password)
        api.requestData(phone, password)
            .then(data => {
                console.log(data)
                if (data.code === 200) {
                    Toast.success(data.msg,1);
                    setTimeout(() => {
                        this.props.history.push({pathname:'/login'})
                    },3000)

                }else{
                    Toast.info(data.msg,1)
                }
            })
    }

    render() {
        console.log(this.state.hasError)
        console.log(this.state.hasPasswordError)
        let type = ''
        let disabled = true
        if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
            type = 'primary';
            disabled = false
        }
        return (
            <div className="content">
                <img src={'http://s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_201f80d.png'}
                     style={{width: "2rem", height: "0.7rem",marginLeft:"0.9rem",marginTop : '1rem',marginBottom:'0.7rem'}}/>

                <InputItem
                    type="phone"
                    clear
                    placeholder="请输入您的手机号"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange.bind(this)}
                    value={this.state.value}
                    className="ippt">
                    <img src={require('../layout/images/shouji.svg')} />
                </InputItem>
                <InputItem
                    type="password"
                    clear
                    placeholder="请输入您的密码"
                    error={this.state.hasPasswordError}
                    onErrorClick={this.onPasswordErrorClick.bind(this)}
                    onChange={this.onPasswordChange.bind(this)}
                    value={this.state.passwordvalue}
                    >
                    <img src={require('../layout/images/mima.svg')} />
                </InputItem>

                <p>已有账号?<NavLink to="/login"><span>点我登录</span></NavLink></p>

                <button type={type} disabled={disabled}
                        onClick={this.loginFn.bind(this, this.state.value, this.state.passwordvalue)} className="bttn">注册
                </button>
            </div>
        )
    }

}

export default Com