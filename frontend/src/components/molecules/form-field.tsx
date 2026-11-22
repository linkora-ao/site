import { useId, type ComponentProps, type ReactNode } from "react";
import { cn } from "@lib/cn";

type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

/** Rótulo + controlo + mensagem de erro. Base de FormInput, FormTextarea e FormSelect. */
function FieldShell({ id, label, required, error, children }: FieldShellProps) {
  return (
    <div>
      <label className="lbl" htmlFor={id}>
        {label} {required && <span className="text-accent-dark">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-erro`} className="mt-[6px] text-[13.5px] text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type Shared = { label: string; error?: string };

/** Campo de texto. Uso: <FormInput label="Nome" error={errors.name?.message} {...register("name")} /> */
export function FormInput({ label, error, className, required, ...rest }: Shared & ComponentProps<"input">) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} required={required} error={error}>
      <input
        id={id}
        className={cn("inp", className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-erro` : undefined}
        {...rest}
      />
    </FieldShell>
  );
}

export function FormTextarea({ label, error, className, required, ...rest }: Shared & ComponentProps<"textarea">) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} required={required} error={error}>
      <textarea
        id={id}
        className={cn("inp", className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-erro` : undefined}
        {...rest}
      />
    </FieldShell>
  );
}

export function FormSelect({ label, error, className, required, children, ...rest }: Shared & ComponentProps<"select">) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} required={required} error={error}>
      <select
        id={id}
        className={cn("inp", className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-erro` : undefined}
        {...rest}
      >
        {children}
      </select>
    </FieldShell>
  );
}
