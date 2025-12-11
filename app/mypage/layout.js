import { parseJwt } from "features/auth/parseJwt";
import './MyPage.css'
import './AdminLayout.scss'
import Link from "next/link";

export default function RootLayout({children}) {
//   const [userId, setUserId] = useState(null);
  
  /** 🔹 로그인 ID 읽기 */
//   useEffect(() => {
//       const stored = localStorage.getItem("loginInfo");
//       if (stored) {
//         const { accessToken } = JSON.parse(stored);
//         const payload = parseJwt(accessToken);
  
//         setUserId(payload.id); // ✅ 토큰 안의 id를 그대로 사용
//       }
  
//     }, []);

    return (
        <div className="admin-container">
            <aside className="admin-sidebar">
                <h2 className="admin-title">마이페이지 메뉴</h2>

                <nav className="admin-nav">
                    <Link href="/mypage/userdetail">개인정보수정</Link>
                    <Link href="/mypage/myorders">주문 내역</Link>
                    <Link href="/mypage/mycoupon">쿠폰함</Link>
                
                </nav>
            </aside>

            <main className="admin-content">
                {children}
                {/* <Outlet /> */}
                {/* <UpdateUserDetail/> */}
            </main>
        </div>
    );
}