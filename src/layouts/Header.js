import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css';

function Header() {
    return (
        <>
            <div className="header">
                <header>
                    <div id="menuBar">
                        <div id="logo" className="logo-container">
                            <Link to="/">
                                <img src="logo.png" alt="오리대학교 로고" className="logo" />
                            </Link>
                        </div>
                        <ul id="topMenu">
                            <li><Link to="/">학교소개</Link>
                                <ul>
                                    <li><Link to="/location">학교 위치</Link></li>
                                    <li><Link to="/orgChart">기구체계도</Link></li>
                                </ul>
                            </li>
                            <li><a href="#">학부전공</a>
                                <ul>
                                    <li><a href="#">미술예술학부</a></li>
                                    <li><a href="#">융합예술학부</a></li>
                                    <li><a href="#">디저트조리학부</a></li>
                                </ul>
                            </li>
                            <li><a href="#">학사정보</a>
                                <ul>
                                    <li><a href="#">학사 일정</a></li>
                                    {/* <li><a href="#">서식 자료실</a></li> */}
                                </ul>
                            </li>

                            <li><a href="#">수업 • 성적</a>
                                <ul>
                                    <li><a href="#">수업 관련</a></li>
                                    <li><a href="#">성적 관련</a></li>
                                </ul>
                            </li>

                            <li><a href="#">대학생활</a>
                                <ul>
                                    <li><a href="#">게시판</a></li>
                                    {/* <li><a href="#">학점계산기</a></li> */}
                                </ul>
                            </li>
                            <li><a href="#">수강신청</a>
                                <ul>
                                    <li><a href="#">장바구니</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div id="kakaoLoginButton">
                            <button id="kakaoLogin">Login</button>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;