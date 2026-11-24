import { useId, type ComponentProps, type ReactNode } from "react";
import { cn } from "@lib/cn";

/** Aspecto único de input, textarea e select. */
const controlClass =
  "w-full border border-border-strong bg-card px-3.5 py-3 text-base font-normal text-card-foreground " +
  "placeholder:text-muted-foreground focus:border-foreground focus-visible:outline-2 focus-visible:outline-ring " +
  "aria-[invalid=true]:border-destructive";

type FieldShellProps = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
};

/** Rótulo + controlo + mensagem de erro. Base de FormInput, FormTextarea e FormSelect. */
function FieldShell({ id, label, optional, error, children }: FieldShellProps) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor={id}>
        {label} {optional && <span className="font-normal text-muted-foreground">(opcional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-erro`} className="text-[13.5px] font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type Shared = { label: string; error?: string; optional?: boolean };

/** Campo de texto. Uso: <FormInput label="Nome" error={errors.name?.message} {...register("name")} /> */
export function FormInput({ label, error, optional, className, ...rest }: Shared & ComponentProps<"input">) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} optional={optional} error={error}>
      <input
        id={id}
        className={cn(controlClass, className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-erro` : undefined}
        {...rest}
      />
    </FieldShell>
  );
}

export function FormTextarea({ label, error, optional, className, ...rest }: Shared & ComponentProps<"textarea">) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} optional={optional} error={error}>
      <textarea
        id={id}
        className={cn(controlClass, "resize-y", className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-erro` : undefined}
        {...rest}
      />
    </FieldShell>
  );
}

export function FormSelect({ label, error, optional, className, children, ...rest }: Shared & ComponentProps<"select">) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} optional={optional} error={error}>
      <select
        id={id}
        className={cn(controlClass, className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-erro` : undefined}
        {...rest}
      >
        {children}
      </select>
    </FieldShell>
  );
}
