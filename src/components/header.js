import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks }) => (
    <header
        style={{
            marginBottom: "1.45rem",
        }}
    >
        <div
            style={{
                marginBottom: "1.45rem",
            }}
        >
            <div
                style={{
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "1.45rem 1.0875rem",
                    display: "flex",
                    justifyItems: "space-between",
                    alignItems: "center",
                }}
            >
                <h1 style={{ margin: 0, flex: 1 }}>
                    <Link to="/">
                        {siteTitle}
                    </Link>
                </h1>
                <div>
                    <nav>
                        <ul style={{ display: "flex", flex: 1 }}>
                            {menuLinks.map(link => (
                                <li
                                    key={link.name}
                                    style={{
                                        listStyleType: `none`,
                                        padding: `1rem`,
                                    }}
                                >
                                    <Link to={link.link}
                                        className="page-link"
                                        style={{

                                        }}
                                    >
                                        <h6>{link.name}</h6>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header