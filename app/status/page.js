import StatusContent from "@/components/StatusContent";
import { Suspense } from "react";

export default function StatusPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <StatusContent />
    </Suspense>
  );
}
