import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbNavProps {
  items: {
    label: string;
    href?: string;
    isCurrentPage?: boolean;
  }[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <div className="mb-4 mt-5">
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <>
              <BreadcrumbItem key={item.label}>
                {item.isCurrentPage ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
} 