import React from 'react'

export default function Footer() {
return (
    <>
        <footer className="text-center text-lg-start bg-light text-muted">
            <div className="container p-4">
                
                <section className="mb-2 text-center">
                    <p>
                        Stay connected with us on social media for the latest updates and news.
                    </p>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2020 Copyright:
                <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    </>
)
}