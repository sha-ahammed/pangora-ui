'use client'

import { mdToHtml } from '@/shared/libs/Markdown'
import { compactNumber } from '@/shared/libs/Number'
import { Card, Image } from '@nextui-org/react'
import { GetSiteResponse } from 'lemmy-js-client'
import AdminGroup from './AdminGroup'

export default function SidebarSiteNode({ site }: { site: GetSiteResponse }) {
  return (
    <div>
      <Card className="rounded-lg p-4 m-4" isBlurred>
        <div className="flex justify-center items-center">
          <Image
            src={site?.site_view.site.icon}
            width="40"
            height="40"
            alt="logo"
          />
          <div className="p-2">
            <p className="text-lg text-slate-200">
              {site?.site_view.site.name}
            </p>
            <p className="text-xs text-slate-300">
              {site?.site_view.site.description}
            </p>
          </div>
        </div>
        <div className="flex text-xs justify-around m-2 text-slate-500">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -1.5 24 24"
              width="14"
              fill="currentColor"
            >
              <path d="M3.534 11.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 16.26V18a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 16.353V18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 1a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm9 17a1 1 0 0 1 0-2h1a1 1 0 0 0 1-1v-1.838a3.387 3.387 0 0 0-2.316-3.213 1 1 0 1 1 .632-1.898A5.387 5.387 0 0 1 20 15.162V17a3 3 0 0 1-3 3h-1zM13 2a1 1 0 0 1 0-2 4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 1 1 0 0 1 0-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className="ml-2">
              {compactNumber(site?.site_view.counts.users)}
            </p>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -1.5 24 24"
              width="14"
              fill="currentColor"
            >
              <path d="M3.534 11.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 16.26V18a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 16.353V18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 1a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm9 17a1 1 0 0 1 0-2h1a1 1 0 0 0 1-1v-1.838a3.387 3.387 0 0 0-2.316-3.213 1 1 0 1 1 .632-1.898A5.387 5.387 0 0 1 20 15.162V17a3 3 0 0 1-3 3h-1zM13 2a1 1 0 0 1 0-2 4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 1 1 0 0 1 0-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className="ml-2">{`${compactNumber(
              site?.site_view.counts.users_active_day
            )} / day`}</p>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-4 -2 24 24"
              width="14"
              fill="currentColor"
            >
              <path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z"></path>
            </svg>
            <p className="ml-2">
              {compactNumber(site?.site_view.counts.posts)}
            </p>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2.5 24 24"
              width="14"
              fill="currentColor"
            >
              <path d="M3.656 17.979A1 1 0 0 1 2 17.243V15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.003l-4.347 2.979zm.844-3.093a.536.536 0 0 0 .26-.069l2.355-1.638A1 1 0 0 1 7.686 13H12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 .54.429.982 1 1 .41.016.707.083.844.226.128.134.135.36.156.79.003.063.003.177 0 .37a.5.5 0 0 0 .5.5z"></path>
              <path d="M16 10.017a7.136 7.136 0 0 0 0 .369v-.37c.02-.43.028-.656.156-.79.137-.143.434-.21.844-.226.571-.018 1-.46 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5V2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v2.243a1 1 0 0 1-1.656.736L16 13.743v-3.726z"></path>
            </svg>
            <p className="ml-2">
              {compactNumber(site?.site_view.counts.comments)}
            </p>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5.5 -2 24 24"
              width="14"
              fill="currentColor"
            >
              <path d="M3 0h7a3 3 0 0 1 3 3v17H0V3a3 3 0 0 1 3-3zM2 18h9V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v15zM4 4h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 3h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 3h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm4-9h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm0 3h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0 3h1a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm-3 3h3a1 1 0 0 1 1 1v1H4v-1a1 1 0 0 1 1-1z"></path>
            </svg>
            <p className="ml-2">
              {compactNumber(site?.site_view.counts.communities)}
            </p>
          </div>
        </div>

        <hr className="mt-5" />
        <div
          dangerouslySetInnerHTML={mdToHtml(site?.site_view.site.sidebar ?? '')}
          className="prose mt-6 prose-invert prose-img:my-1 prose-sm p-4"
        ></div>
      </Card>
      <AdminGroup admins={site?.admins || []} />
    </div>
  )
}
