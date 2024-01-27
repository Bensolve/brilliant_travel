import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// ... (previous imports)

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="logo.svg" alt="logo" width={154} height={109} />
          </Link>

          <div className='flex flex-wrap gap-5 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.id} title={columns.title}>
                <ul className="regular-18 flex flex-col gap-4 text-gray-800">
                  {columns.links.map((link, index) => (
                    <li key={index}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className="regular-18 flex flex-col gap-4 text-gray-800">
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <li key={index}>
                    <Link href="/">{link}</Link>
                  </li>
                ))}
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link, index) => (
                    <li key={index}>
                      <Link href="/">
                        <Image src={link} alt={`Social icon for ${SOCIALS.title}`} width={24} height={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <hr className="bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-800">
          2023 Brilliant Travel And Tour | All rights reserved
        </p>
      </div>
    </footer>
  );
};

 
type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="bold-18 whitespace-nowrap">{title}</h2>
      {children}
    </div>
  )
}

export default Footer