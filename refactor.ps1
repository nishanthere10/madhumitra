Get-ChildItem -Path ".\src" -Filter *.jsx -Recurse | ForEach-Object {
    $content = Get-Content -Path $_.FullName -Raw
    $newContent = $content.Replace("font-['Space_Grotesk']", "font-sans").Replace("slate-", "stone-").Replace("rounded-3xl", "rounded-sm").Replace("rounded-2xl", "rounded-sm").Replace("rounded-xl", "rounded-sm").Replace("shadow-xs", "shadow-[2px_2px_0px_#1C1917]").Replace("shadow-sm", "shadow-[4px_4px_0px_#1C1917]").Replace("shadow-md", "shadow-[6px_6px_0px_#1C1917]").Replace("shadow-lg", "shadow-[8px_8px_0px_#1C1917]").Replace("shadow-xl", "shadow-[8px_8px_0px_#1C1917]").Replace("shadow-2xl", "shadow-[12px_12px_0px_#1C1917]").Replace("shadow-inner", "shadow-[inset_4px_4px_0px_rgba(28,25,23,0.1)]").Replace("border border-amber-200", "border-2 border-stone-900").Replace("border border-amber-300", "border-2 border-stone-900").Replace("border border-emerald-200", "border-2 border-stone-900").Replace("border border-emerald-300", "border-2 border-stone-900").Replace("border border-red-200", "border-2 border-stone-900").Replace("border border-red-300", "border-2 border-stone-900").Replace("border-4 border-stone-800", "border-4 border-stone-900")

    if ($content -cne $newContent) {
        Set-Content -Path $_.FullName -Value $newContent -NoNewline
        Write-Host "Updated $($_.FullName)"
    }
}
