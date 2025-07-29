import { Suspense } from "react";
import StatusContent from "./StatusContent";

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
