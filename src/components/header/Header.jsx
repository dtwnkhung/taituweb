import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { login, register } from "../../lib/client-apis/nguoi-dung";
import { toChuc } from "../../lib/client-apis/to-chuc";
/*---------Using reducer mange the active or inactive menu----------*/
const initialState = {
  activeMenu: "",
  mobileMenuState: false,
  navState: false,
  scrollY: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "homeOne":
      return { ...state, activeMenu: "homeOne" };
    case "suits":
      return { ...state, activeMenu: "suits" };
    case "blog":
      return { ...state, activeMenu: "blog" };
    case "menu":
      return { ...state, activeMenu: "menu" };
    case "gallary":
      return { ...state, activeMenu: "gallary" };
    case "shop":
      return { ...state, activeMenu: "shop" };
    case "chef":
      return { ...state, activeMenu: "chef" };
    case "pages":
      return { ...state, activeMenu: "pages" };
    case "mobileMenu":
      return { ...state, mobileMenuState: action.isMobileMenu };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      throw new Error();
  }
}

function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const [isLock, setIsLock] = useState(false);
  const [messageLogin, setMessageLogin] = useState({
    message: null,
    status: false,
  });
  const [messageRegister, setMessageRegister] = useState({
    message: null,
    status: false,
  });
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };

  const [toChucs, setToChucs] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const onLoginSubmit = async (e) => {
    setIsLock(true);
    e.preventDefault();
    const target = e.target;
    const data = {
      tenDangNhap: target?.tenDangNhap?.value,
      matKhau: target?.matKhau?.value,
    };
    setMessageLogin({
      message: null,
      status: false,
    });
    const result = await login(data);
    if (result.success) {
      router.reload(window.location.pathname);
    }
    setMessageLogin({
      status: result.success,
      message: result.message,
    });
    setIsLock(false);
  };

  const onRegisterSubmit = async (e) => {
    setIsLock(true);
    e.preventDefault();
    const target = e.target;
    const data = {
      idToChuc: target?.toChuc?.value,
      tenDangNhap: target?.tenDangNhap?.value,
      matKhau: target?.matKhau?.value,
      tenNguoiDung: target?.tenNguoiDung?.value,
      email: target?.email?.value,
      soDienThoai: target?.soDienThoai?.value,
    };
    setMessageRegister({
      message: null,
      status: false,
    });
    const result = await register(data);
    if (result.success) {
      setMessageLogin({
        message: "Thêm mới thành công, vui lòng đăng nhập để tiếp tục",
        status: true
      })
      setMessageRegister({
        message: null,
        status: false
      })
      setIsSignUp(false)
    }
    setMessageRegister({
      status: result.success,
      message: result.message,
    });
    setIsLock(false);
  };

  const getData = async () => {
    const tc = await toChuc();
    setToChucs(tc);
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isSignUp ? "Đăng ký" : "Đăng nhập"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div>
            {isSignUp ? (
              <form onSubmit={onRegisterSubmit}>
                {messageRegister.message && (
                  <h6
                    className={`mb-4 ${
                      messageRegister.status ? "text-success" : "text-danger"
                    }`}
                  >
                    {messageRegister.message}
                  </h6>
                )}
                <Form.Group className="mb-3">
                  <Form.Label>Tổ chức</Form.Label>
                  <Form.Select className="py-2" name="toChuc" readOnly={isLock}>
                    {toChucs?.map((tc) => {
                      return (
                        <option key={tc.id} value={tc.id}>
                          {tc.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Tên đăng nhập <span className="text-danger">(*)</span>
                  </Form.Label>
                  <Form.Control
                    name="tenDangNhap"
                    type="text"
                    className="py-2"
                    placeholder="Nhập tên đăng nhập"
                    readOnly={isLock}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>
                    Mật khẩu <span className="text-danger">(*)</span>
                  </Form.Label>
                  <Form.Control
                    name="matKhau"
                    type="password"
                    className="py-2"
                    placeholder="Nhập mật khẩu"
                    readOnly={isLock}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Tên người dùng <span className="text-danger">(*)</span>
                  </Form.Label>
                  <Form.Control
                    name="tenNguoiDung"
                    type="text"
                    className="py-2"
                    placeholder="Nhập tên người dùng"
                    readOnly={isLock}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>
                    Email <span className="text-danger">(*)</span>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    className="py-2"
                    placeholder="Nhập email"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>
                    Số điện thoại <span className="text-danger">(*)</span>
                  </Form.Label>
                  <Form.Control
                    name="soDienThoai"
                    type="text"
                    className="py-2"
                    placeholder="Nhập số điện thoại"
                    readOnly={isLock}
                  />
                </Form.Group>
                <div className="text-center text-secondary mb-3">
                  Đã có tài khoản ?{" "}
                  <span
                    className="text-primary"
                    onClick={() => setIsSignUp(isLock)}
                    style={{ cursor: "pointer" }}
                  >
                    Đăng nhập
                  </span>
                </div>
                <Button
                  variant="primary"
                  className="text-uppercase d-block w-100 py-2"
                  type="submit"
                  disabled={isLock}
                >
                  đăng ký
                </Button>
              </form>
            ) : (
              <form onSubmit={onLoginSubmit}>
                {messageLogin.message && (
                  <h6
                    className={`mb-4 ${
                      messageLogin.status ? "text-success" : "text-danger"
                    }`}
                  >
                    {messageLogin.message}
                  </h6>
                )}
                <Form.Group className="mb-3">
                  <Form.Label>Tên đăng nhập</Form.Label>
                  <Form.Control
                    name="tenDangNhap"
                    type="password"
                    className="py-2"
                    placeholder="Nhập tên đăng nhập"
                    readOnly={isLock}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control
                    name="matKhau"
                    type="password"
                    className="py-2"
                    placeholder="Nhập mật khẩu"
                    readOnly={isLock}
                  />
                </Form.Group>
                <div className="text-center text-secondary mb-3">
                  Chưa có tài khoản ?{" "}
                  <span
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsSignUp(!isLock)}
                  >
                    Đăng ký
                  </span>
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="text-uppercase d-block w-100 py-2"
                  disabled={isLock}
                >
                  đăng nhập
                </Button>
              </form>
            )}
          </div>
        </Modal.Body>
      </Modal>
      <header
        ref={headerRef}
        className={
          state.scrollY > 120
            ? "header-area style-1 bg-color2 sticky"
            : "header-area style-1 bg-color2"
        }
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  src="/assets/images/source/logo.jpg"
                />
              </a>
            </Link>
          </div>
          <div
            className={
              state.mobileMenuState == true
                ? "main-menu show-menu"
                : "main-menu"
            }
          >
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link href="/" legacyBehavior>
                  <a>
                    <img
                      alt="image"
                      src="/assets/images/source/logo.jpg"
                      style={{ height: 80 }}
                    />
                  </a>
                </Link>
              </div>
              <div className="menu-close-btn">
                <i
                  className="bi bi-x-lg text-white"
                  onClick={() =>
                    dispatch({ type: "mobileMenu", isMobileMenu: false })
                  }
                />
              </div>
            </div>
            <ul className="menu-list">
              {/* <li className="menu-item-has-children">
              <a
                href="#"
                className={
                  currentRoute === "/" ? "drop-down active" : "drop-down"
                }
              >
                Home
              </a>
              <i
                onClick={() => dispatch({ type: "homeOne" })}
                className={
                  state.activeMenu === "homeOne"
                    ? "bi bi-plus dropdown-icon active"
                    : "bi bi-plus dropdown-icon"
                }
              />
              <ul
                className={
                  state.activeMenu === "homeOne"
                    ? "sub-menu  d-block"
                    : "sub-menu d-xl-block d-none"
                }
              >
                <li>
                  <Link
                    href="/"
                    className={currentRoute === "/" ? "active" : "disable"}
                  >
                    Home One
                  </Link>
                </li>
                <li>
                  <Link
                    href="/index2"
                    className={
                      currentRoute === "/index2" ? "active" : "disable"
                    }
                  >
                    Home Two
                  </Link>
                </li>
                <li>
                  <Link
                    href="/index3"
                    className={
                      currentRoute === "/index3" ? "active" : "disable"
                    }
                  >
                    Home Three
                  </Link>
                </li>
              </ul>
            </li> */}
              <li>
                <Link
                  href="/"
                  className={currentRoute === "/" ? "active" : "disable"}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={currentRoute === "/about" ? "active" : ""}
                >
                  giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/menu1"
                  className={currentRoute === "/menu1" ? "active" : "disable"}
                >
                  Thực đơn
                </Link>
              </li>
              {/* <li className="menu-item-has-children">
              <Link
                href="/menu1"
                className={
                  currentRoute === "/menu1" ||
                  currentRoute === "/menu2" ||
                  currentRoute === "/3col-menu"
                    ? "drop-down active"
                    : "drop-down"
                }
              >
                Thực đơn
              </Link>
              <i
                onClick={() => dispatch({ type: "menu" })}
                className={
                  state.activeMenu === "menu"
                    ? "bi bi-plus dropdown-icon active"
                    : "bi bi-plus dropdown-icon"
                }
              />
              <ul
                className={
                  state.activeMenu === "menu"
                    ? "sub-menu  d-block"
                    : "sub-menu d-xl-block d-none"
                }
              >
                <li>
                  <Link
                    href="/menu1"
                    className={currentRoute === "/menu1" ? "active" : "disable"}
                  >
                    Thực đơn 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu2"
                    className={currentRoute === "/menu2" ? "active" : "disable"}
                  >
                    Thực đơn 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="/3col-menu"
                    className={
                      currentRoute === "/3col-menu" ? "active" : "disable"
                    }
                  >
                    3 Columns Menu
                  </Link>
                </li>
              </ul>
            </li> */}
              {/* <li className="menu-item-has-children">
              <a href="#" className="drop-down">
                Pages
              </a>
              <i
                onClick={() => dispatch({ type: "pages" })}
                className={
                  state.activeMenu === "pages"
                    ? "bi bi-plus dropdown-icon active"
                    : "bi bi-plus dropdown-icon"
                }
              />
              <ul
                className={
                  state.activeMenu === "pages"
                    ? "sub-menu  d-block"
                    : state.activeMenu === "gallary" ||
                      state.activeMenu === "chef" ||
                      state.activeMenu === "shop"
                    ? "sub-menu  d-block"
                    : "sub-menu d-xl-block d-none"
                }
              >
                <li>
                  <Link
                    href="/category"
                    className={
                      currentRoute === "/category" ? "active" : "disable"
                    }
                  >
                    Food Category
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reservation"
                    className={
                      currentRoute === "/reservation" ? "active" : "disable"
                    }
                  >
                    Reservation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={currentRoute === "#" ? "active" : "disable"}
                  >
                    Gallery
                  </Link>
                  <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                  <i
                    className="d-lg-none d-flex bi bi-chevron-down dropdown-icon"
                    onClick={() => dispatch({ type: "gallary" })}
                  />
                  <ul
                    className={
                      state.activeMenu === "gallary"
                        ? "sub-menu d-block"
                        : "sub-menu d-xl-block  d-none"
                    }
                  >
                    <li>
                      <Link
                        href="/2col-gallery"
                        className={
                          currentRoute === "/2col-gallery"
                            ? "active"
                            : "disable"
                        }
                      >
                        2 Columns Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/3col-gallery"
                        className={
                          currentRoute === "/3col-gallery"
                            ? "active"
                            : "disable"
                        }
                      >
                        3 Columns Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      currentRoute === "/chef-expertis" ? "active" : "disable"
                    }
                  >
                    Chef
                  </a>
                  <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                  <i
                    className="d-lg-none d-flex bi bi-chevron-down dropdown-icon"
                    onClick={() => dispatch({ type: "chef" })}
                  />
                  <ul
                    className={
                      state.activeMenu === "chef"
                        ? "sub-menu d-block"
                        : "sub-menu d-xl-block  d-none"
                    }
                  >
                    <li>
                      <Link
                        href="/chef-expertis"
                        className={
                          currentRoute === "/chef-expertis"
                            ? "active"
                            : "disable"
                        }
                      >
                        Chef Experties
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/chef-details"
                        className={
                          currentRoute === "/chef-details"
                            ? "active"
                            : "disable"
                        }
                      >
                        Chef Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className={currentRoute === "/shop" ? "active" : "disable"}
                  >
                    Shop
                  </Link>
                  <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                  <i
                    className="d-lg-none d-flex bi bi-chevron-down dropdown-icon"
                    onClick={() => dispatch({ type: "shop" })}
                  />
                  <ul
                    className={
                      state.activeMenu === "shop"
                        ? "sub-menu d-block"
                        : "sub-menu d-xl-block  d-none"
                    }
                  >
                    <li>
                      <Link
                        href="/shop"
                        className={
                          currentRoute === "/shop" ? "active" : "disable"
                        }
                      >
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/shop-details"
                        className={
                          currentRoute === "/shop-details"
                            ? "active"
                            : "disable"
                        }
                      >
                        Shop Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cart"
                        className={
                          currentRoute === "/cart" ? "active" : "disable"
                        }
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/check-out"
                        className={
                          currentRoute === "/check-out" ? "active" : "disable"
                        }
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/faq">Faq</Link>
                </li>
                <li>
                  <Link href="/error">Error</Link>
                </li>
              </ul>
            </li> */}
              <li>
                <Link
                  href="/blog"
                  className={currentRoute === "/blog" ? "active" : "disable"}
                >
                  Tin tức
                </Link>
              </li>
              {/* <li className="menu-item-has-children">
              <a href="#">Blog</a>
              <i
                onClick={() => dispatch({ type: "blog" })}
                className={
                  state.activeMenu === "blog"
                    ? "bi bi-plus dropdown-icon active"
                    : "bi bi-plus dropdown-icon"
                }
              />
              <ul
                className={
                  state.activeMenu === "blog"
                    ? "sub-menu  d-block"
                    : "sub-menu d-xl-block d-none"
                }
              >
                <li>
                  <Link href="/blog-grid">Blog Grid</Link>
                </li>
                <li>
                  <Link href="/blog-standard">Blog Standard</Link>
                </li>
                <li>
                  <Link href="/blog-details">Blog Details</Link>
                </li>
              </ul>
            </li> */}
              <li>
                <Link
                  href="/contact"
                  className={currentRoute === "/contact" ? "active" : "disable"}
                >
                  Liên hệ
                </Link>
              </li>
              <div className="d-block d-sm-block d-md-none d-lg-none">
                <Link href="/reservation" className="primary-btn btn-md mt-3">
                  Đặt bàn ngay
                </Link>
              </div>
            </ul>
            <div className="hotline d-lg-none d-flex">
              <div className="hotline-icon">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z" />
                  <path d="M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z" />
                  <path d="M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z" />
                </svg>
              </div>
              <div className="hotline-info">
                <span>Liên hệ chúng tôi ngay</span>
                <h6>
                  <a href="tel:0906 539 539">0906 539 539</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            <div className="hotline d-xxl-flex d-none">
              <div className="hotline-icon">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z" />
                  <path d="M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z" />
                  <path d="M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z" />
                </svg>
              </div>
              <div className="hotline-info">
                <span>Liên hệ chúng tôi ngay</span>
                <h6>
                  <a href="tel:0906 539 539">0906 539 539</a>
                </h6>
              </div>
            </div>
            {/* <Link href="/contact" className="primary-btn btn-md">
            Đặt bàn ngay
          </Link> */}
            <Link href="/reservation" className="primary-btn btn-md">
              Đặt bàn ngay
            </Link>
            <Link
              onClick={() => setShowModal(true)}
              href=""
              className="primary-btn btn-md no-before-after"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #bf9444",
              }}
            >
              Đăng nhập
            </Link>
            {/* <Dropdown>
              <Dropdown.Toggle className="text-primary" variant="transparent" id="dropdown-basic">
                Tên tài khoản
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#"><small>Lịch sử đặt bàn</small></Dropdown.Item>
                <Dropdown.Item href="#"><small>Đăng xuất</small></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <div
              className="sidebar-button mobile-menu-btn "
              onClick={() =>
                dispatch({ type: "mobileMenu", isMobileMenu: true })
              }
            >
              <i className="bi bi-list" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
