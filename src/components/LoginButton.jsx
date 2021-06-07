import { useHistory, withRouter } from 'react-router-dom';

// export default withRouter(function LoginButton(props) {
//   const login = () => {
//     setTimeout(() => {
//       // 페이지 이동
//       props.history.push('/');
//     }, 1000);
//   };

//   return <button onClick={login}>로그인하기</button>;
// });

export default function LoginButton() {
  const history = useHistory();

  const login = () => {
    setTimeout(() => {
      // 페이지 이동
      history.push('/');
    }, 1000);
  };

  return <button onClick={login}>로그인하기</button>;
}
