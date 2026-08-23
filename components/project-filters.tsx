"use client"

import { useState, type ReactNode } from "react"
import { Button, Input, Modal } from "@heroui/react"

import { useLanguage } from "@/components/language-provider"
import { TagCombobox } from "@/components/tag-combobox"
import { TagMultiSelect } from "@/components/tag-multi-select"
import { PROJECT_YEARS, TYPE_TAGS, WORK_TAGS } from "@/lib/projects"
import { getTagLabel } from "@/lib/tag-colors"

interface ProjectFiltersProps {
  query: string
  onQueryChange: (value: string) => void
  year: string | null
  onYearChange: (year: string | null) => void
  workTags: string[]
  onWorkTagsChange: (tags: string[]) => void
  typeTags: string[]
  onTypeTagsChange: (tags: string[]) => void
  hasActiveFilters: boolean
  onClear: () => void
}

function FilterField({
  label,
  className = "w-40",
  children,
}: {
  label: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-medium text-zinc-500">{label}</span>
      {children}
    </div>
  )
}

export function ProjectFilters({
  query,
  onQueryChange,
  year,
  onYearChange,
  workTags,
  onWorkTagsChange,
  typeTags,
  onTypeTagsChange,
  hasActiveFilters,
  onClear,
}: ProjectFiltersProps) {
  const { t, locale } = useLanguage()
  const getLabel = (tag: string) => getTagLabel(tag, locale)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [draftQuery, setDraftQuery] = useState(query)
  const [draftYear, setDraftYear] = useState(year)
  const [draftWorkTags, setDraftWorkTags] = useState(workTags)
  const [draftTypeTags, setDraftTypeTags] = useState(typeTags)

  function openFilterModal() {
    setDraftQuery(query)
    setDraftYear(year)
    setDraftWorkTags(workTags)
    setDraftTypeTags(typeTags)
    setIsFilterOpen(true)
  }

  function applyFilters() {
    onQueryChange(draftQuery)
    onYearChange(draftYear)
    onWorkTagsChange(draftWorkTags)
    onTypeTagsChange(draftTypeTags)
    setIsFilterOpen(false)
  }

  return (
    <>
      <div className="hidden flex-wrap items-end justify-end gap-3 sm:flex">
        <FilterField label={t.projects.yearLabel}>
          <TagCombobox
            tags={PROJECT_YEARS}
            value={year}
            onChange={onYearChange}
            placeholder={t.projects.yearPlaceholder}
            allLabel={t.projects.yearPlaceholder}
          />
        </FilterField>

        <FilterField label={t.projects.workLabel}>
          <TagMultiSelect
            tags={WORK_TAGS}
            value={workTags}
            onChange={onWorkTagsChange}
            placeholder={t.projects.workPlaceholder}
            getLabel={getLabel}
          />
        </FilterField>

        <FilterField label={t.projects.typeLabel}>
          <TagMultiSelect
            tags={TYPE_TAGS}
            value={typeTags}
            onChange={onTypeTagsChange}
            placeholder={t.projects.typePlaceholder}
            getLabel={getLabel}
          />
        </FilterField>

        <FilterField label={t.projects.searchLabel}>
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={t.projects.searchPlaceholder}
            aria-label={t.projects.searchLabel}
            className="w-full rounded-[8px]"
          />
        </FilterField>

        {hasActiveFilters && (
          <div className="flex flex-col gap-1.5">
            <span aria-hidden className="text-xs font-medium text-transparent select-none">
              .
            </span>
            <Button
              variant="tertiary"
              size="md"
              onPress={onClear}
              className="rounded-[8px]"
            >
              {t.projects.clear}
            </Button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 sm:hidden">
        <Button
          variant="tertiary"
          size="sm"
          onPress={openFilterModal}
          className="rounded-[8px]"
        >
          {t.projects.filter}
        </Button>
        {hasActiveFilters && (
          <Button
            variant="danger-soft"
            size="sm"
            onPress={onClear}
            className="rounded-[8px]"
          >
            {t.projects.clear}
          </Button>
        )}
      </div>

      <Modal isOpen={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <Modal.Backdrop>
          <Modal.Container size="lg" scroll="outside">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Heading>{t.projects.filterModalTitle}</Modal.Heading>
                <Modal.CloseTrigger />
              </Modal.Header>
              <Modal.Body className="flex flex-col gap-4">
                <FilterField label={t.projects.yearLabel} className="w-full">
                  <TagCombobox
                    tags={PROJECT_YEARS}
                    value={draftYear}
                    onChange={setDraftYear}
                    placeholder={t.projects.yearPlaceholder}
                    allLabel={t.projects.yearPlaceholder}
                  />
                </FilterField>

                <FilterField label={t.projects.workLabel} className="w-full">
                  <TagMultiSelect
                    tags={WORK_TAGS}
                    value={draftWorkTags}
                    onChange={setDraftWorkTags}
                    placeholder={t.projects.workPlaceholder}
                    getLabel={getLabel}
                  />
                </FilterField>

                <FilterField label={t.projects.typeLabel} className="w-full">
                  <TagMultiSelect
                    tags={TYPE_TAGS}
                    value={draftTypeTags}
                    onChange={setDraftTypeTags}
                    placeholder={t.projects.typePlaceholder}
                    getLabel={getLabel}
                  />
                </FilterField>

                <FilterField label={t.projects.searchLabel} className="w-full">
                  <Input
                    value={draftQuery}
                    onChange={(event) => setDraftQuery(event.target.value)}
                    placeholder={t.projects.searchPlaceholder}
                    aria-label={t.projects.searchLabel}
                    className="w-full rounded-[8px]"
                  />
                </FilterField>
              </Modal.Body>
              <Modal.Footer className="flex justify-end gap-2">
                <Button
                  variant="tertiary"
                  size="md"
                  onPress={() => setIsFilterOpen(false)}
                  className="rounded-[8px]"
                >
                  {t.projects.cancel}
                </Button>
                <Button
                  variant="tertiary"
                  size="md"
                  onPress={applyFilters}
                  className="rounded-[8px] bg-[#2F2F33] text-white hover:bg-zinc-700"
                >
                  {t.projects.filter}
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  )
}
